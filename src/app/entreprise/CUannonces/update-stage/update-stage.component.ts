import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Data } from '@angular/router';
import { DialogData } from 'app/entreprise/gestionoffres/gestionoffres.component';



@Component({
  selector: 'app-update-stage',
  templateUrl: './update-stage.component.html',
  styleUrls: ['./update-stage.component.css']
})
export class UpdateStageComponent implements OnInit {
  durationInSeconds =  5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  eformStage: any;
  constructor(private _snackBar: MatSnackBar,
    public dialog: MatDialog,private frmbuilder: FormBuilder,
    private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.eformStage = this.frmbuilder.group({
      id:this.data.idannonce,
      poste: ['',Validators.required],
      desc: ['',Validators.required],
      niveau: ['',Validators.required],
      duree: ['',Validators.required],
      govern: ['',Validators.required]
    })

   
  }


  


  
  openSnackBar(text) {
    this._snackBar.open(text, 'Fermer', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:1000,
    });
  }

  UpdateOffreStage(dataform1){
    this.http.post('http://localhost/recruitini/Stages/editStage.php',dataform1).subscribe(
      data => {
        setTimeout(() => {
          this.openSnackBar('Announce modifié!');
         window.location.href = 'dashboard/components/entreprise/gestionoffres';
         }
          , 900);
      },
      error => {
          console.log('Error', error);
      });
  
  }
  

}
