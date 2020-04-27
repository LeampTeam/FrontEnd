import {Articulo} from './articulo'

export class Usuario{

  constructor(
    public id:string,
    public name:string,
    public surname:string,
    public img:string,
    public productos:Array<Articulo>

  ){

  }
}
