export class Articulo{
  public ruta:string
  constructor(
    public id:string,
    public name:string,
    public description:string,
    public code:string,
    public price:number,
    public img:string,
    public fragancia:string,
    public categoria:string,
    public marca:string,

  ){

  }
}
