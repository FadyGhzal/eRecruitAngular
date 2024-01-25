import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-profilecondidat',
  templateUrl: './profilecondidat.component.html',
  styleUrls: ['./profilecondidat.component.css']
})
export class ProfilecondidatComponent implements OnInit {
  firstName: string;
  lastName: string;
  showEdit:any;
  showEditCV:any;
  finishedCV:any;
  accountType: string;
  isLogged: () => boolean;
  profiledata:any;
  updateProfileForm:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  CVForm: any;
  CVdata: any;

  constructor(private ds:DataserviceService,private http: HttpClient,private _snackBar: MatSnackBar,private frmbuilder: FormBuilder) {}

  ngOnInit() {

    this.accountType = this.ds.getAccountType();
      this.isLogged = this.ds.isLoggedIn;

    this.showEdit=false;
    this.finishedCV = false;
    this.getCV();
  /*  if (this.finishedCV == false){
      alert("Veulliez completer votre CV pour accéder a votre profile.");
      window.location.replace('dashboard/finishprofile');
    }
*/

this.updateProfileForm = this.frmbuilder.group({
  id:this.ds.getID(),
  nom: ['',Validators.required],
  cin: ['',Validators.required],
  age: ['',Validators.required],
  adresse: ['',Validators.required],
  email: ['',Validators.required],
  telephone: ['',Validators.required],
  domaine: ['',Validators.required],
})


//cv electronique

this.CVForm = this.frmbuilder.group({
  id:this.ds.getID(),
  niveau: ['',Validators.required],
  langueFR: false,
  langueAR: false,
  langueEN: false,
  formation_nom : ['',Validators.required],
  formation_duree : ['',Validators.required],
  diplome_nom : ['',Validators.required],
  diplome_annee: ['',Validators.required],
  experience_nomEntreprise: ['',Validators.required],
  experience_nomExperience: ['',Validators.required],
  experience_dureeExperience: ['',Validators.required],
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

  toggleEditCV(){
    if (this.showEditCV) {
      this.showEditCV = false;
    }else {
      this.showEditCV = true;
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

  updateProfile(updateProfileForm){
    this.http.put<any>('http://localhost/recruitini/Account/updateProfileC.php',updateProfileForm).subscribe(
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


updateCV(f){
  console.log(f);


  
let langData = {
  'language': []
}
if (f.langueFR) {
langData.language[langData.language.length] = 'Francais';
}
if (f.langueAR) {
  langData.language[langData.language.length] = 'Arabe';
  }
  if (f.langueEN) {
    langData.language[langData.language.length] = 'Anglais';
    }


let PosteData = {

  'languagues' : langData,

  'id' : f.id,

  'niveau': f.niveau,

  'nom_diplome' : f.diplome_nom,
  'annee_diplome' : f.diplome_annee,

  'nom_formation' : f.formation_nom,
  'duree_formation' : f.formation_duree,

  'nomEntreprise_experience' : f.experience_nomEntreprise,
  'nom_experience' : f.experience_nomExperience,
  'duree_experience' : f.experience_dureeExperience,
 

};


this.http.post('http://localhost/recruitini/Account/updateCV.php',PosteData).subscribe(
data => {
  setTimeout(() => {
    this.openSnackBar('CV updated');
    
    this.getCV();
    this.showEditCV = false;
   }
    , 900);
},
error => {
console.log('Error', error);
this.openSnackBar("Un erreur lors de l'ajout de la language!");
}); 



}



getCV(){
  let idData = {'id': this.ds.getID()}
  this.http.post('http://localhost/recruitini/Account/getCV.php',idData).subscribe(
    data => {

      this.CVdata = data;
      console.log(this.CVdata);
      if (this.CVdata.length != 0){
        //update CV update form 

        this.CVForm.patchValue({

          formation_nom : this.CVdata[0]['nom_formation'],
          formation_duree : this.CVdata[0]['duree_formation'],
          diplome_nom : this.CVdata[0]['nom_diplome'],
          diplome_annee: this.CVdata[0]['annee_diplome'],
          experience_nomEntreprise: this.CVdata[0]['experience_entreprise'],
          experience_nomExperience: this.CVdata[0]['nom_experience'],
          experience_dureeExperience: this.CVdata[0]['duree_experience'],

        });

      }

      
    },
    error => {
        console.log('Error', error);
    });

}


Demissioner(){
  let c = confirm("Êtes-vous sûr de vouloir démissionner de votre emploi actuel ?");
  if (c) {
    let idData = {'id': this.ds.getID()}
    this.http.post('http://localhost/recruitini/Candidat/resign.php',idData).subscribe(
      data => {
        this.openSnackBar('Vous avez démissionné de votre emploi.');
        this.getProfile();
        },
      error => {
          //console.log('Error', error);
      });
  }else {
    this.openSnackBar('Operation annulé!');
  }
}




} 