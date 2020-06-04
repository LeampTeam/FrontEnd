import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel-producto',
  templateUrl: './carousel-producto.component.html',
  styleUrls: ['./carousel-producto.component.css']
})
export class CarouselProductoComponent implements OnInit {

  @Input() Articulos=[]
  @Output() envio=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  enviarProducto(event){
    this.envio.emit(event)
  }
}
