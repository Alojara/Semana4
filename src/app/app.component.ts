import { Component } from '@angular/core';
import{Imagenes} from './modelos/imagenes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public elementosGuardados: Array<Imagenes> = [];

  public nuevoHistorial: Imagenes ={
    nombre: "",
    detalle: "",
    imagen: ""
  }
  public cambiarNombre(evento: Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.nombre = elemento.value;
  }
  public cambiarDetalle(evento: Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.detalle = elemento.value;
  }
  public cambiarImagen(evento: Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoHistorial.imagen = elemento.value;
  }

  public guardarHistorial(): void{
    //1 nivel
    const copia:Imagenes ={
      ...this.nuevoHistorial
    }
    copia.id =this.elementosGuardados.length + 1;
    this.elementosGuardados.push(copia);
    this.nuevoHistorial.nombre = "";
    this.nuevoHistorial.detalle = "";
    this.nuevoHistorial.imagen = "";
  }

  public imagen: string = "https://i.pinimg.com/236x/83/03/ed/8303ed9adf08e364aaf56bcbac151050.jpg";
  public ima:string="https://c.tenor.com/0JboOJ6ovNEAAAAC/random-doge.gif";
  public imagen2:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqfrK6zWaEwOnXjdDaDC5VrnGN1DWPQ6nEtQ&usqp=CAU";
  public imagen3:string="https://cdn-images-1.listennotes.com/podcasts/el-podcast-m%C3%A1s-random-del-mundo-L6I3Ep9lRTB-xB_PCg0EDch.1400x1400.jpg";
  public imagen4:string="https://encrypted-tbn.gstatic.com/images?q=tbn:ANd9GcRubQH1F3DZWpm3WYs5SKpQBSH_ocCYenGjkA&usqp=CA";
  public imagen5:String="https://marcianosmx.com/wp-content/uploads/2013/08/Random-Access-61.jpg.webp"


}
