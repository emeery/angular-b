import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servidores]', selector atributo _ <div app-servers>
  // selector: '.app-servidores', selector clase _ <div class="app-servers">
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServidoresComponent implements OnInit {
  newServidor = false;
  servidorAviso = 'no hay servidor creado';
  servidorNombre = 'test-servidor';
  servidorCreado = false;
  servidorId = 10;
  serverStatus = 'offline';
  servidores = ['servidor 1', 'servidor 2'];
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    const num = Math.random();
    console.log(num);
  }

  ngOnInit() {
    setTimeout(() => {
      this.newServidor = true;
    }, 2000);
  }
  onCrearServidor() {
    this.servidorCreado = true;
    this.servidores.push(this.servidorNombre);
    this.servidorAviso = 'servidor creado';
  }
  onActualizaServidor(evento: Event) {
    this.servidorNombre = (<HTMLInputElement>evento.target).value;
  }
  getServidorStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
