import { Component } from "@angular/core";
import { MenuActionClass } from './menuAction.component';

@Component({
    selector: 'widgets-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuWidgetComponent {
    brand : String = 'Elink';
    menuActions = [
        new MenuActionClass("Home", "/"),
        new MenuActionClass("Sobre", "/sobre"),
        new MenuActionClass("Contato", "/contato"),
    ];

    constructor(){}
}