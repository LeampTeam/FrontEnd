import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../service/articulo.service';

@Component({
  selector: 'app-articulo-puntera',
  templateUrl: './articulo-puntera.component.html',
  styleUrls: ['./articulo-puntera.component.css']
})
export class ArticuloPunteraComponent implements OnInit {

  public Articulos:Array<any>

  constructor(private articuloService:ArticuloService) { }

  ngOnInit() {
   this.articuloService.getArticulosPuntera().subscribe(articulos =>{
      this.Articulos=articulos
    })

  }

}
