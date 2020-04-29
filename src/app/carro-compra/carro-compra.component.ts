import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/Usuario';

import { CarroCompraServiceService } from './carro-compra-service.service';

@Component({
  selector: 'app-carro-compra',
  templateUrl: './carro-compra.component.html',
  styleUrls: ['./carro-compra.component.css']
})
export class CarroCompraComponent implements OnInit {
  public Articulos:Array<any>
  public usuario:Usuario

  constructor(private articuloService:CarroCompraServiceService) { }

  ngOnInit() {
    this.articuloService.obtenerArticulosShop().subscribe(res =>{
      this.Articulos=res;
    })
  }

}
