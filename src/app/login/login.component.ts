import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticuloService } from '../service/articulo.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public tipo:string;

  constructor( private formBuilder: FormBuilder,private articuloService:ArticuloService,
  route: ActivatedRoute ) {
      console.log(route)
      route.url.subscribe(url=>this.tipo=url[0].path)
    }

  public ngOnInit() {
    this.buildForm();
  }
  private buildForm(){


    const minPassLength = 4;
    this.formGroup = this.formBuilder.group({

    tipo:this.tipo,
    email: ['', [
      Validators.required, Validators.email
    ]],
    password: ['', [
      Validators.required, Validators.minLength(minPassLength)
    ]]
    });
  }
  public register(){
    const user = this.formGroup.value;
    this.articuloService.sendLoguin(user)
    .subscribe(res => {
      console.log(res)
      localStorage.setItem('currentUser', res.token);
      localStorage.setItem('currentEmail', res.email);
      localStorage.setItem('currentImg', res.img);
      });

  }
  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

}
