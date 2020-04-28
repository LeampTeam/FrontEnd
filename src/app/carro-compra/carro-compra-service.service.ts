import { Injectable } from '@angular/core';
import { CarroCompraComponent } from './carro-compra.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarroCompraServiceService {

  constructor(private http: HttpClient) { }


  obtenerArticulosShop(){
    return this.http.get<any>('http://127.0.0.1:4000/shop/enviarArticulos')
  }
}
