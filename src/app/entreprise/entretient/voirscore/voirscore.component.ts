import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { DataserviceService } from 'app/dataservice.service';
import {MatStepperModule} from '@angular/material/stepper';
import { DialogDataC } from 'app/entreprise/entretient/demandes/demandes.component';

@Component({
  selector: 'app-voirscore',
  templateUrl: './voirscore.component.html',
  styleUrls: ['./voirscore.component.css']
})
export class voirScoreComponent implements OnInit {

  //criteres//
  totalscore:any;
  domainecheck:any;
  diplomecheck:any;
  languagecheck:any;
  niveaucheck:any;
  experiencecheck:any;
  languagescore:any;
  //
  durationInSeconds =  5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  criterelanguages:any;
  candidatlanguages:any;
  assignRDVform: any;
  id_c: Number;
  id_t: Number;
  scoredata:any;
  candidatscore: any;
  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,private frmbuilder: FormBuilder,private http: HttpClient,
    private dataService: DataserviceService,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataC
    ) {     

    }
    public dialogRef: MatDialogRef<voirScoreComponent>;
  ngOnInit() {
    this.candidatscore = 0;
    this.id_c = this.data.id_candidat;
    this.id_t = this.data.id_travail;
    this.getScoreData();

  }

  
  openSnackBar(text) {
    this._snackBar.open(text, 'Fermer', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:1000,
    });
  }


  getScoreData(){
    let idData = {'id_c':this.id_c,'id_t':this.id_t};
    this.http.post('http://localhost/recruitini/Demandes/calculateScore.php',idData).subscribe(
      data => {
        this.scoredata = data;
        //CALCULATE SCORE 



//CHECK IF CANDIDAT HAS THE NEEDED LANGUAGES FOR THIS WORK
this.totalscore = 4;
this.candidatlanguages = JSON.parse(this.scoredata[0].CandidatLangues);
this.criterelanguages = JSON.parse(this.scoredata[0].CritereLangues);
this.languagescore = 0;
this.totalscore = this.totalscore + this.criterelanguages.language.length;


for(let cdl of this.candidatlanguages.language){
 if (this.criterelanguages.language.includes(cdl)){
   console.log(cdl , "is included in critere.");
   
   this.languagescore++;
   console.log(this.languagescore);
   if (this.languagescore == this.criterelanguages.language.length ) {
    this.languagecheck = true;
   }
 }
}
this.candidatscore = this.candidatscore + this.languagescore;

      if (this.scoredata[0].CritereDomaine == this.scoredata[0].CandidatDomaine){
        this.candidatscore++;
        this.domainecheck=true;
      }
        if (this.scoredata[0].CritereBac < this.scoredata[0].CandidatBac){
          this.candidatscore++;
          this.niveaucheck=true;

        }
        if (this.scoredata[0].CritereExp < this.scoredata[0].CandidatExp){
          this.candidatscore++;
          this.experiencecheck=true;

        }
        if (this.scoredata[0].CritereDiplome == this.scoredata[0].CandidatDiplome){
          this.candidatscore++;
          this.diplomecheck=true;

        }


      },
      error => {
          console.log('Error', error);
      });
  }
      }


