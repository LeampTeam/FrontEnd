import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService } from './login/auth-interceptor.service';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CarroCompraComponent } from './carro-compra/carro-compra.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ArticuloPunteraComponent } from './articulo-puntera/articulo-puntera.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    CarroCompraComponent,
    ArticuloComponent,
    ArticulosComponent,
    ArticuloPunteraComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
