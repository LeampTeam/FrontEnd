import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontEnd';
  public ruta=false;


  constructor(private router: Router){

  }
  ngOnInit() {
    var rutaslash=this.router.url;
    if(rutaslash!='/'){
      this.ruta=true
    }
    console.log('ruta',this.router.url)

  }

}
