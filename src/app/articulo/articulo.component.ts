import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ArticuloService} from '../service/articulo.service';
import {Articulo} from '../articulos/articulo'

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})

export class ArticuloComponent implements OnInit {

public paramId:string
public articulo:Articulo


  constructor(  route: ActivatedRoute, private articuloService:ArticuloService) {
    route.params.subscribe(params => {
      this.paramId = params.id;
    });
  }

  ngOnInit() {
    this.articuloService.getArticuloById(this.paramId).subscribe(articulo=>{
      this.articulo=articulo

      console.log(this.articulo)
    }
    )
  }

}
