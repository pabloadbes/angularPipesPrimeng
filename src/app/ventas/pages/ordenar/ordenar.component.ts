import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {

  ordenarPor: string = 'sin valor'
  active: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: 'superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'linterna verde',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiarOrden(orden: string) {
    this.ordenarPor = orden;
  }
}
