import {Message} from "../chat/shared/message";
import {ZeldBotService} from "./zeld.bot.service";
import {ZeldBotModel} from "./zeld.bot.model";

export const commands = [
  {
    args: false,
    words: ['oi', 'ola'],
    reaction: null,
    response: function (): Message {

      const possibleResponses = ["Oi!", "Olá!", "Ola! Muito prazer!"];
      const randomNumber = Math.floor((Math.random() * possibleResponses.length));
      return new Message('Zeld [BOT]', '', possibleResponses[randomNumber]);
    }
  },
  {
    args: false,
    words: ['unknowcommand'],
    response: function ():Message {
      const message = "Comando desconhecido :c";
      return new Message(ZeldBotModel.nameBot, ZeldBotModel.imageUrl, message);
    }
  },
  {
    args: false,
    words: ['tip-encurtar'],
    reaction: null,
    response: function (): Message {
      const message = 'Para encurtar um link mande o link.';
      return new Message(ZeldBotModel.nameBot, ZeldBotModel.imageUrl, message);
    }
  },
  {
    args: true,
    reaction: {
      type:'query',
      url:'shorten/link',
      params:{
        linkOlder:null,
        linkNew:null,
      }
    },
    words: ['!encurtar'],
    response: function ( link: string, novolink: string ): Message {
      const message = `${link} foi transformado em ${novolink}`;
      return new Message(ZeldBotModel.nameBot, ZeldBotModel.imageUrl, message);
    }
  }
];

