import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { ArticuloService } from 'src/app/service/articulo.service';
import { Articulo } from 'src/model/articulo';
import { of } from 'rxjs';
import { groupBy, mergeMap, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public Articulos:Array<any>=[]

  constructor(private articuloService:ArticuloService
    ,private router: Router
    ,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.articuloService.getArticulos().subscribe(articulos=>{
      console.log(articulos)
      // this.Articulos=articulos
      // for(let i=0;i<articulos.length;i++){
      //   this.Articulos[i].ruta='/products/articulo/'+articulos[i].id
      // }
      of(
        ...articulos
        ).pipe(
          groupBy(p => p.categoria),
          mergeMap((group$) => group$.pipe(reduce((acc:Articulo[], cur) => [...acc, cur], []))),
        )
        .subscribe(p => {this.Articulos.push(p)
          console.log(this.Articulos)
         });

      }
    )

  }



  enviarProducto(event){
    console.log(event)
    let id=event.path[0].id;
    console.log(id)
    this.articuloService.enviarProducto(id,1).subscribe(res=>{
      console.log(res)
      this.router.navigate(['products/shop']);

    })
  }

}
