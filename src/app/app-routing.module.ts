import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { CarroCompraComponent } from './carro-compra/carro-compra.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloPunteraComponent } from './articulo-puntera/articulo-puntera.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
    children:[
    { path: 'login', component: LoginComponent },
    { path: 'registrar', component: LoginComponent },
  ]
  },
  {path:'products',component:ProductosComponent,
    children:[
      { path: 'articulos', component: ArticulosComponent },

      { path: 'articulo/:id',component:ArticuloComponent},
      { path: 'shop',component: CarroCompraComponent },
      { path: 'puntera',component: ArticuloPunteraComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
