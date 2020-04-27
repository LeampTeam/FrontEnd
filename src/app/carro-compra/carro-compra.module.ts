import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarroCompraRoutingModule } from './carro-compra-routing.module';
import { CarroCompraComponent } from './carro-compra.component';


@NgModule({
  declarations: [CarroCompraComponent],
  imports: [
    CommonModule,
    CarroCompraRoutingModule
  ]
})
export class CarroCompraModule { }
