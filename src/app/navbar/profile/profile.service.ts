import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  guardarImagen(formData){
    return this.httpClient.post<any>('http://127.0.0.1:4000/usuario/cargarImagen/', formData)
  }



}
