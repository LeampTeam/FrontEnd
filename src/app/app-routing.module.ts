import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArticulosComponent } from './articulos/articulos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'articulo', loadChildren: () => import('./articulo/articulo.module').then(m => m.ArticuloModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
