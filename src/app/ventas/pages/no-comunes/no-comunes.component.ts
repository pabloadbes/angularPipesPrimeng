import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent{

  //i18nSelect
  persona1 = {
    nombre: 'Pablo',
    genero: 'masculino',
    edad: 39
  }; 

  persona2 = {
    nombre: 'Naty',
    genero: 'femenino',
    edad: 40
  };

  persona = this.persona1;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Messi','Dibu','Huevo','Ota','Lisandro','Taglia','MacA','Molina','Paredes','Yulian','El Papu'];
  clientesMapa = {
    '=0': 'No hay clientes esperando.',
    '=1': 'Tenemos un cliente esperando.',
    'other': 'Tenemos # clientes esperando.'
  }

  cambiarPersona() {
    if( this.persona == this.persona1 ){
      this.persona = this.persona2;
    }
    else this.persona = this.persona1
  }

  quitarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  //Async Pipe
  miObservable = interval(1000);  //0,1,2,3,4,5,6...

  miPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Promesa resuelta, datos obtenidos!');
    }, 3500);
  })
}
