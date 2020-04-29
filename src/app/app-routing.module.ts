import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { CarroCompraComponent } from './carro-compra/carro-compra.component';
import { ArticulosComponent } from './articulos/articulos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: LoginComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: '', component: HomeComponent },
  { path: 'articulo/:id',component:ArticuloComponent},
  { path: 'shop',component: CarroCompraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
