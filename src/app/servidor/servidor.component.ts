import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servidor',
    templateUrl: './servidor.component.html',
    styleUrls: ['./servidor.component.scss']
})
export class ServidorComponent {
    visible= false;
    log = [];
    constructor() { }
    onVisible() {
        this.visible = !this.visible;
        this.log.push(this.log.length + 1);
    }
}


