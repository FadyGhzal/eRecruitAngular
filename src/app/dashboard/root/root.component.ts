import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DataserviceService } from 'app/dataservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  isLogged:any;
  profiledata: any;
  testform: any;
  acctype:any;
  bgColor:any;
  constructor(private router:Router,private ds:DataserviceService,private _snackBar: MatSnackBar,private frmbuilder: FormBuilder) {


  this.acctype = this.ds.getAccountType();
 this.isLogged = this.ds.isLoggedIn();
this.getProfile();

if (this.acctype == "Entreprise") {
  this.bgColor = '#548cd6';

}else if (this.acctype == "Admin"){
  this.bgColor = '#000000';
}else if (this.acctype == "Candidat"){
  this.bgColor = '#d65c54';
}

  }

  getProfile(){
    this.ds.getProfileData().subscribe(
      data => {
       
        this.profiledata = data;


      },
      error => {
          console.log("Erreur");
      });
  }
  
}
