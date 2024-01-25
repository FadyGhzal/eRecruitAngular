import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-profile-e',
  templateUrl: './profile-e.component.html',
  styleUrls: ['./profile-e.component.css']
})
export class ProfileEComponent implements OnInit {

  firstName: string;
  lastName: string;
  showEdit:any;
  accountType: string;
  isLogged: () => boolean;
  profiledata:any;
  updateProfileForm: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private ds:DataserviceService,private http: HttpClient,private _snackBar: MatSnackBar,private frmbuilder: FormBuilder) { }

  ngOnInit() {
    this.accountType = this.ds.getAccountType();
    this.isLogged = this.ds.isLoggedIn;
    this.showEdit=false;

    this.updateProfileForm = this.frmbuilder.group({
      id:this.ds.getID(),
      nom: ['',Validators.required],
      domaine: ['',Validators.required],
      email: ['',Validators.required],
      adresse: ['',Validators.required],
      site: ['',Validators.required],
      telephone: ['',Validators.required],
    })
    this.getProfile();
  }

  toggleEdit(){
    if (this.showEdit) {
      this.showEdit = false;
    }else {
      this.showEdit = true;
    }
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
        this.updateProfileForm.patchValue({
          nom: this.profiledata[0]['nom'],
          domaine : this.profiledata[0]['domaine'],
          email : this.profiledata[0]['email'],
          adresse : this.profiledata[0]['adresse'],
          telephone : this.profiledata[0]['telephone'],
          site : this.profiledata[0]['site'],
        });
      },
      error => {
          console.log("Erreur");
      });
  }

  updateProfile(updateProfileForm){

  this.http.put<any>('http://localhost/recruitini/Account/updateProfileE.php',updateProfileForm).subscribe(
    data => {
      this.openSnackBar('Profile modifié');
      this.getProfile();
      this.showEdit = false;

    },
    error => {
        console.log('Error', error);
        this.openSnackBar("Un erreur lors de la modification de votre profile");
    });

}


}
