export class MenuActionClass{
    text : String;
    href : String;

    constructor(text : String, href : String){
        this.text = text;
        this.href = href;
    }

    getHref(){
      return this.href;
    }

}
