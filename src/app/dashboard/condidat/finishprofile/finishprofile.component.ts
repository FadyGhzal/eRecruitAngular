import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-finishprofile',
  templateUrl: './finishprofile.component.html',
  styleUrls: ['./finishprofile.component.css']
})
export class FinishprofileComponent implements OnInit {
  isLinear = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  isLogged: () => boolean;
  accountType: string;
  updateProfileForm: any;
  profiledata: any;

  constructor(private _formBuilder: FormBuilder,private http: HttpClient,private ds : DataserviceService,private _snackBar: MatSnackBar) {}

  ngOnInit() {

    this.accountType = this.ds.getAccountType();
      this.isLogged = this.ds.isLoggedIn;


      this.updateProfileForm = this._formBuilder.group({
        id:this.ds.getID(),
        nom: ['',Validators.required],
        cin: ['',Validators.required],
        age: ['',Validators.required],
        adresse: ['',Validators.required],
        email: ['',Validators.required],
        telephone: ['',Validators.required],
        domaine: ['',Validators.required],
      })
      this.getProfile();

  }


  updateProfile(updateProfileForm){
    this.http.put<any>('http://localhost/recruitini/Account/updateProfileC.php',updateProfileForm).subscribe(
    data => {
      this.openSnackBar('Profile modifié');
      this.getProfile();

    },
    error => {
        console.log('Error', error);
        this.openSnackBar("Un erreur lors de la modification de votre profile");
    });

}

openSnackBar(text) {
  this._snackBar.open(text, 'Fermer', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: 1000,
  });
}


  getProfile(){
    this.ds.getProfileData().subscribe(
      data => {
       
        this.profiledata = data;
        console.log(this.profiledata);
        
       //remplir les donnees de formulaire
        this.updateProfileForm.patchValue({
          nom: this.profiledata[0]['nom'],
          cin : this.profiledata[0]['cin'],
          email : this.profiledata[0]['email'],
          adresse : this.profiledata[0]['adresse'],
          telephone : this.profiledata[0]['telephone'],
          age : this.profiledata[0]['age'],
          domaine : this.profiledata[0]['domaine'],
        });
      },
      error => {
          console.log("Erreur");
      });
  }

  
}