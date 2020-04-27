import { Injectable } from '@angular/core';
import { Observable  } from "rxjs";
import { from ,of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import {Articulo} from '../../model/articulo'



@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  getArticulos():Observable<Articulo[]>{
   return this.http.get<Articulo[]>('http://127.0.0.1:4000/producto/getProductos')
  }

  getArticuloById(param:string):Observable<Articulo>{
    return this.http.get<Articulo>('http://127.0.0.1:4000/producto/getProducto/'+param)
  }
  sendLoguin(user:any){
   return this.http.post<any>('http://127.0.0.1:4000/usuario/loguin/',user)
  }
  enviarProducto(productoId:String,cantidad:Number){
    let producto={
      id:productoId,
      cantidad:cantidad
    }
    return this.http.post<any>('http://127.0.0.1:4000/shop/cargaProductos/',producto)
  }



}
