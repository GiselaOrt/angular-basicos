import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>
    <h3>La base es:<strong> {{base1}} </strong></h3>
    <button (click)="acumular(base1)"> +{{base1}} </button>

    <span>{{numero}}</span>
    <button (click)="acumular(-base1)"> -{{base1}} </button>
    `

})
export class ContadorComponent {
    title = 'Contador App';
  numero : number=10;
  base1   : number=5;
  acumular(valor:number){
    this.numero+=valor;
  }
}