import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticuloComponent } from './articulo.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CarroCompraComponent } from './carro-compra/carro-compra.component';

const routes: Routes = [
  { path: ':id', component: ArticuloComponent },
  { path: '',
   component: ArticulosComponent,
   children: [
    {
    path: 'shop',
    component:  CarroCompraComponent
    }

  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticuloRoutingModule { }
