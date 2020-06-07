import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public img:string
uploadForm: FormGroup
  constructor(private formBuilder: FormBuilder,private profileService:ProfileService,private router: Router) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    this.img="http://127.0.0.1:4000/usuario/obtenerImagen/"+localStorage.getItem('currentImg');

  }
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
    this.onSubmit()
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);

    this.profileService.guardarImagen(formData).subscribe(
      (res) =>{
        console.log(res)
        if(res.mensaje=='ok'){
          localStorage.setItem('currentImg', res.img)
          this.router.navigate(['products/articulos']);
          this.ngOnInit()
        }
      }

    );
  }
  cerrarSession(){
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentEmail')
    localStorage.removeItem('currentImg')

    this.router.navigate(['/'])
  }

}
