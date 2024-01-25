import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'app/dataservice.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName: string;
  lastName: string;
  profiledata: any;
  updateProfileForm:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private ds:DataserviceService,private http: HttpClient,private _snackBar: MatSnackBar,private frmbuilder: FormBuilder) { }

  ngOnInit() {

    this.updateProfileForm = this.frmbuilder.group({
      id:this.ds.getID(),
      nom: ['',Validators.required],
      cin: ['',Validators.required],
      age: ['',Validators.required],
      adresse: ['',Validators.required],
      email: ['',Validators.required],
      telephone: ['',Validators.required],
    })
    this.getProfile();


  }


  openSnackBar(text) {
    this._snackBar.open(text, 'Fermer', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration : 1000,
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
        });
      },
      error => {
          console.log("Erreur");
      });
  }

  updateProfile(updateProfileForm){
  
  this.http.post('http://localhost/recruitini/Account/updateProfileA.php',updateProfileForm).subscribe(
    data => {
      this.openSnackBar('Profile modifié');
      this.getProfile();
    },
    error => {
        console.log('Error', error);
        this.openSnackBar("Un erreur lors de la modification de votre profile");
    });

}

}
