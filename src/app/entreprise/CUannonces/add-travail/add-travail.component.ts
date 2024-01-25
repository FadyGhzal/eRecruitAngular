import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { DataserviceService } from 'app/dataservice.service';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-add-travail',
  templateUrl: './add-travail.component.html',
  styleUrls: ['./add-travail.component.css']
})
export class AddTravailComponent implements OnInit {
  durationInSeconds =  5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  testlanguages:any;
  TravailForm: any;
  StageForm: any;
  FormationForm: any;
  critereForm: any;
  langueForm: any;
  competForm: any;
  isLinear:any;
  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,private frmbuilder: FormBuilder,private http: HttpClient,private dataService: DataserviceService) { }

  ngOnInit() {
     this.isLinear = false;
    console.log(this.dataService.getID());
    this.TravailForm = this.frmbuilder.group({
      id:this.dataService.getID(),
      poste: ['',Validators.required],
      desc: ['',Validators.required],
      duree: ['',Validators.required],
      govern: ['',Validators.required]
    })
    this.critereForm = this.frmbuilder.group({
      id: [''],
      bac : ['',Validators.required],
      experience : ['',Validators.required],
    })
    this.langueForm = this.frmbuilder.group({
      id: [''],
      langueAR : false,
      langueFR : false, 
      langueEN : false,
    })
    this.competForm = this.frmbuilder.group({
      id: [''],
      nom_diplome : ['',Validators.required],
      annee : ['',Validators.required],
    })
    

    //

    this.StageForm = this.frmbuilder.group({
      id:this.dataService.getID(),
      poste: ['',Validators.required],
      desc: ['',Validators.required],
      niveau: ['',Validators.required],
      duree: ['',Validators.required],
      govern: ['',Validators.required]
    })
    //

    this.FormationForm = this.frmbuilder.group({
      id:this.dataService.getID(),
      nom: ['',Validators.required],
      domaine: ['',Validators.required],
      desc: ['',Validators.required],
      duree: ['',Validators.required],
      niveau: ['',Validators.required],
      prix: ['',Validators.required],
    })
  }

  public dialogRef: MatDialogRef<AddTravailComponent>;



  
  openSnackBar(text) {
    this._snackBar.open(text, 'Fermer', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }



  AddOffreStage(StageForm){
  
    this.http.post('http://localhost/recruitini/Stages/addStage.php',StageForm).subscribe(
      data => {
        console.log("ANNONCE AJOUTE POUR ENTREPRISE ", data);

          this.openSnackBar('Announce de stage ajoute!');


      },
      error => {
          console.log('Error', error);
          this.openSnackBar("Un erreur lors de l'ajout de l'annonce!");
      });
    }

  AddOffreFormation(FormationForm){
  
        this.http.post('http://localhost/recruitini/Formations/addFormation.php',FormationForm).subscribe(
          data => {
            console.log("IDs",data);
            this.openSnackBar('Annonce ajoute!');

          },
          error => {
              console.log('Error', error);
              this.openSnackBar("Un erreur lors de l'ajout de l'annonce!");
          });
      
      }
  
  
      //GO HARD OR GO HOME HELL YEAH OH YEAH 

      ajoutertravailv2(tform,cform,lform,dform){
        console.log(tform,cform,lform,dform);
//

let langData = {
  'language': []
}
if (lform.langueFR) {
langData.language[langData.language.length] = 'Francais';
}
if (lform.langueAR) {
  langData.language[langData.language.length] = 'Arabe';
  }
  if (lform.langueEN) {
    langData.language[langData.language.length] = 'Anglais';
    }


let PosteData = {

  'languagues' : langData,

  'id' : tform.id,
  'poste': tform.poste,
  'desc' : tform.desc,
  'duree' : tform.duree,
  'govern' : tform.govern,

  'bac' : cform.bac,
  'experience' : cform.experience,
  
  'nom_diplome' : dform.nom_diplome,
  'annee' : dform.annee,

};




this.http.post('http://localhost/recruitini/Travails/addTravail.php',PosteData).subscribe(
data => {
    this.openSnackBar('Announce de travail ajouté!');


},
error => {
console.log('Error', error);
this.openSnackBar("Un erreur lors de l'ajout de la language!");
}); 


}


//
      }


