import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/Usuario';

@Component({
  selector: 'app-carro-compra',
  templateUrl: './carro-compra.component.html',
  styleUrls: ['./carro-compra.component.css']
})
export class CarroCompraComponent implements OnInit {

  public usuario:Usuario

  constructor() { }

  ngOnInit() {
  }

}
