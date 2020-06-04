import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public esHome:boolean=false
  constructor(private router: Router
    ,private route: ActivatedRoute) { }

  ngOnInit() {
    var rutaslash=this.router.url;
    if(rutaslash!='/'){
      this.esHome=true
    }
    console.log('ruta',this.router.url)
  }

}
