import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel-producto',
  templateUrl: './carousel-producto.component.html',
  styleUrls: ['./carousel-producto.component.css']
})
export class CarouselProductoComponent implements OnInit {

  @Input() Articulos=[]
  @Output() envio=new EventEmitter()
  public slideCant:Array<number>=[]
  constructor() { }

  ngOnInit() {
    let cant=Math.ceil(this.Articulos.length/4)
    for(let i =0;i<cant;i++){
      this.slideCant.push(1)
    }

  }
  enviarProducto(event){
    this.envio.emit(event)
  }
}
