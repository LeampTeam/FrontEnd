import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-producto',
  templateUrl: './carousel-producto.component.html',
  styleUrls: ['./carousel-producto.component.css']
})
export class CarouselProductoComponent implements OnInit {

  @Input() Articulos=[]
  constructor() { }

  ngOnInit() {
  }

}
