import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarroCompraComponent } from './carro-compra.component';

const routes: Routes = [{ path: '', component: CarroCompraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarroCompraRoutingModule { }
