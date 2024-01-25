import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'app/dataservice.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register-e',
  templateUrl: './register-e.component.html',
  styleUrls: ['./register-e.component.css']
})
export class RegisterEComponent implements OnInit {
 
  isLogged:any;
  SignupForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: DataserviceService,private router:Router) {

    this.SignupForm = this.fb.group({
      nom: ['', [Validators.required,Validators.minLength(1)]],
      pass: ['', Validators.required],
      cpass: ['', Validators.required],
      email: ['', Validators.required],
      domaine: ['', Validators.required],
      site: ['', Validators.required],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],


    });
   }
  ngOnInit() {
   
  }

  Register(SignupForm:any)
  {
   if (SignupForm.value.pass == SignupForm.value.cpass){

    console.log(SignupForm.value);
    this.dataService.RegisterUser(SignupForm.value.nom,SignupForm.value.pass,SignupForm.value.email,"ENTREPRISE",SignupForm.value.domaine,SignupForm.value.site,SignupForm.value.telephone,SignupForm.value.adresse).pipe(first())
    .subscribe(
        data => {
          alert("Votre compte a été créé, il sera contrôlé et vérifié par un administrateur dans les plus brefs délais.");
              //this.router.navigate(['/login']);
          },
          error => {
            alert("Username already exists!");
          });
   }else{
    alert("les mots de passe ne correspondent pas!");
   }
  }
  

}
