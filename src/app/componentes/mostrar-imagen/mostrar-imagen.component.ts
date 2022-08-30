import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-imagen',
  templateUrl: './mostrar-imagen.component.html',
  styleUrls: ['./mostrar-imagen.component.scss']
})
export class MostrarImagenComponent {
  @Input()  public imagen: string="";
  private imagenError:string="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1";
  public cambiarImagenError():void{
    this.imagen = this.imagenError;
  }

}
