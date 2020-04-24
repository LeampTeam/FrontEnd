import { Component, OnInit } from '@angular/core';
import {Articulo} from './articulo'
import {ArticuloService} from '../service/articulo.service'

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public Articulos:Articulo[]

  constructor(private articuloService:ArticuloService) {

  }

  ngOnInit() {
    this.articuloService.getArticulos().subscribe(articulos=>{
      console.log(articulos)
      this.Articulos=articulos
      for(let i=0;i<articulos.length;i++){
        this.Articulos[i].ruta='/articulo/'+articulos[i].id
      }
      console.log(this.Articulos)
    }
    )

  }

}
