import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Data, Router } from '@angular/router';
import { DialogData } from 'app/entreprise/gestionoffres/gestionoffres.component';


@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {
  durationInSeconds =  5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  eformFormation: any;


  constructor(private router:Router,private _snackBar: MatSnackBar,public dialog: MatDialog,private frmbuilder: FormBuilder,private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.eformFormation = this.frmbuilder.group({
      id:this.data.idannonce,
      nom: ['',Validators.required],
      domaine: ['',Validators.required],
      desc: ['',Validators.required],
      niveau: ['',Validators.required],
      duree: ['',Validators.required],
      prix: ['',Validators.required],
    })

   
  }


  


  
  openSnackBar(text) {
    this._snackBar.open(text, 'Fermer', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:1000,
    });
  }

  UpdateOffreFormation(dataform1){
    this.http.post('http://localhost/recruitini/Formations/editFormation.php',dataform1).subscribe(
      data => {

         setTimeout(() => {
           this.openSnackBar('Announce modifié!');
          window.location.href = 'dashboard/components/entreprise/gestionoffres';
          }
           , 900);

      },
      error => {
          console.log('Error', error);
          this.openSnackBar('Erreur lors de la modification!');
      });
  
  }
  

}
