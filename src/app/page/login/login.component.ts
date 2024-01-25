import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from 'app/dataservice.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  SigninForm: FormGroup;
  isLogged: boolean;
 
  constructor(private fb: FormBuilder,private dataService: DataserviceService,private router:Router) {
    this.isLogged = this.dataService.isLoggedIn();
    this.SigninForm = this.fb.group({
      email: ['', [Validators.required]],
      pass: ['', Validators.required]
 
    });
   }
 
  ngOnInit() {
   if (this.isLogged) {

    this.router.navigate(['/dashboard/']);
   }
  }
  LoginUser(singinform:any)
  {
    this.dataService.LoginUser(singinform.value.email,singinform.value.pass)
      .pipe(first())
      .subscribe(
          data => {
            if (data.length === 0){
              alert("User name or password is incorrect")
              return;
            }
            //If user details is correct , redirect user to the homepage
            setTimeout(() => {
              
              this.router.navigate(['/dashboard/']);
          }, 500);

   
            
  
            //console.log("Logged in as ",this.dataService.getUser());
 
          },
          error => {
              alert("User name or password is incorrect")
          });
  }

}
