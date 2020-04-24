import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticuloService } from '../service/articulo.service';
import { TokenStoreService } from './token-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;


  constructor( private formBuilder: FormBuilder,private articuloService:ArticuloService,
    private tokenStore:TokenStoreService ) { }

  public ngOnInit() {
    this.buildForm();
  }
  private buildForm(){


    const minPassLength = 4;
    this.formGroup = this.formBuilder.group({


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
      console.log(res.token)
      this.tokenStore.dispatch(res.token)});

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
