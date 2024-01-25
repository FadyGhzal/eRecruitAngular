import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'app/dataservice.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register-c',
  templateUrl: './register-c.component.html',
  styleUrls: ['./register-c.component.css']
})
export class RegisterCComponent implements OnInit {

  isLogged:any;
  SignupForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: DataserviceService,private router:Router) {

    this.SignupForm = this.fb.group({
      nom: ['', [Validators.required,Validators.minLength(1)]],
      pass: ['', Validators.required],
      cpass: ['', Validators.required],
      email: ['', Validators.required],

    });
   }
  ngOnInit() {
   
  }

  Register(SignupForm:any)
  {
   if (SignupForm.value.pass == SignupForm.value.cpass){

    console.log(SignupForm.value);
    this.dataService.RegisterUser(SignupForm.value.nom,SignupForm.value.pass,SignupForm.value.email,"Candidat",'','','','').pipe(first())
    .subscribe(
        data => {
            alert("Votre compte a été créé, veuillez vous connecter à votre compte");
              this.router.navigate(['/login']);
          },
          error => {
            alert("Username already exists!");
          });
   }else{
    alert("les mots de passe ne correspondent pas!");
   }
  }
  

}
