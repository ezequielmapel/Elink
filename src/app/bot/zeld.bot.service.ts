import {Injectable} from "@angular/core";
import {commands} from "./zeld.commands";
import {RoomService} from "../chat/room/room.service";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {DataService} from "../dataService.service";

@Injectable()
export class ZeldBotService {
  errorUnknowCommand: string = "Comando desconhecido.";

  constructor( private roomService:RoomService , private http: HttpClient, private dataService: DataService) {
    this.greetings();
  }

  execute(command: string, args: [] = null): string {
    const commandExists = this.commandExists(command);
    if (!commandExists) return this.errorUnknowCommand;

    const commandToExecute = commandExists.response;
    const responseCommand = !commandToExecute.args ?
                            commandToExecute() : commandToExecute(args);

    // sem timeout não dá tempo do next
    setTimeout( ()=>{
      this.roomService.addMessage(responseCommand);
    }, 100);

    return;
  }

  private commandExists(command: string): any {
    const commandExists = commands.find(c => c.words.includes(command));
    return commandExists ? commandExists : false;
  }


  private filterWordsInMessage(message: string): any[] {
    const messageSplit = message.split(' ');
    const commandAction = [];

    // não possui reaction para comando único
    if (messageSplit.length==1) {
      return [{word:messageSplit[0], params:null, reaction:null}];
    };

    // para comandos com '/', procura a reaction
    messageSplit.forEach( (m:string, index) => {

      if(m.trim().includes('!')){
        const command = commands.find( c => c.words.includes(m) );
        commandAction.push( { word:m , params:[], reaction: command.reaction} );

      }else if( m.trim().includes('=')){
        const argValue = m.split('=');
        commandAction[0].reaction.params[argValue[0]] = argValue[1];
      }
    });

    return commandAction;
  }

  private greetings():any {
    this.execute('oi');
    setTimeout(()=>{
      this.execute('tip-encurtar');
    }, 400);
  }

  readMessages( messages:any ):any {
   const lastMessage =  messages[ messages.length-1 ];
   const matcher = /(\!+[A-Za-z])\w+/g;

   if (lastMessage.message.trim().match(matcher)){
     this.reaction(lastMessage.message);
   }

  }

  private sendRequestFromWord(reaction: any){
    const url = this.dataService.getServer()+reaction.url;
    this.http.post(url, reaction.params).subscribe(data=>{
    }, error => {
      catchError(error);
    })
  }

  private reaction(message: any){
    try{
      const command =  this.filterWordsInMessage(message);
      command.forEach( word => {
        if(word.reaction){
          this.sendRequestFromWord(word.reaction);
        }
      } );
    }catch (e) {
      this.execute("unknowcommand");
    }


  }
}
