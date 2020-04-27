import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: LoginComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'articulo', loadChildren: () => import('./articulo/articulo.module').then(m => m.ArticuloModule) },
  { path: 'shop', loadChildren: () => import('./carro-compra/carro-compra.module').then(m => m.CarroCompraModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
