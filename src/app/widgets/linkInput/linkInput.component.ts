import { Component } from "@angular/core";


@Component({
    selector: 'widgets-linkinput',
    templateUrl:'./linkInput.component.html',
    styleUrls:['linkInput.component.css']
})
export class LinkInputWidgetComponent{
    placeholder : String = "Informe o link";
    constructor(){
    }
}