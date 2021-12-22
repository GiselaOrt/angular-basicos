import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
   public heroeBorrado:string='';
 heroes:string[]=['verde','mujer Maravilla','thor']

 borrarHeroe():void{
   console.log('Borrando');
   this.heroeBorrado = this.heroes.shift() || '';
 }
}
