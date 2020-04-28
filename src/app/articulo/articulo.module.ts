import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticuloRoutingModule } from './articulo-routing.module';
import { ArticuloComponent } from './articulo.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CarroCompraComponent } from './carro-compra/carro-compra.component';


@NgModule({
  declarations: [ArticuloComponent
    ,NavbarComponent
    ,ArticulosComponent
    ,CarroCompraComponent],
  imports: [
    CommonModule,
    ArticuloRoutingModule
  ]
})
export class ArticuloModule { }
