import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public estalogueado:boolean=false
  public email:string

  constructor(private router: Router
    ,private route: ActivatedRoute) { }

  ngOnInit() {
    var rutaslash=localStorage.getItem('currentUser');
    this.email=localStorage.getItem('currentEmail')

    if(rutaslash){
      this.estalogueado=true
    }

  }


}
