import {Injectable} from "@angular/core";

@Injectable()
export class DataService{
  private url:string = 'http://localhost';
  private port:number = 80;

  constructor() {
  }

  getServer():string{
    return `${this.url}:${this.port}/`;
  }
}
