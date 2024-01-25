import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { DataserviceService } from 'app/dataservice.service';
import {MatStepperModule} from '@angular/material/stepper';
import { DialogDataC } from 'app/entreprise/entretient/demandes/demandes.component';

@Component({
  selector: 'app-donneRDV',
  templateUrl: './donneRDV.component.html',
  styleUrls: ['./donneRDV.component.css']
})
export class donneRDVComponent implements OnInit {
  durationInSeconds =  5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  assignRDVform: any;

  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,private frmbuilder: FormBuilder,private http: HttpClient,
    private dataService: DataserviceService,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataC
    ) {     

    }
    public dialogRef: MatDialogRef<donneRDVComponent>;
  ngOnInit() {
    this.assignRDVform = this.frmbuilder.group({
      date_RDV: ['',Validators.required],
    })
  }

  
  openSnackBar(text) {
    this._snackBar.open(text, 'Fermer', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:1000,
    });
  }



  acceptDemande(f){
    let donnee = {'id_d':this.data.id_demande,
    'id_c':this.data.id_candidat,
    'id_e':this.data.id_entreprise,
    'id_t':this.data.id_travail,
    'date_RDV':f.date_RDV,
  };
  console.log(donnee);
    this.http.post('http://localhost/recruitini/Demandes/acceptDemande.php',donnee).subscribe(
      data => {
       alert('demande accepté! un rdv a eté assigné à ' + f.date_RDV + '! ');
      
      },
      error => {
          console.log('Error', error);
      });

  }
      }


