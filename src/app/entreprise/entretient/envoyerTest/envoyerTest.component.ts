import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { DataserviceService } from 'app/dataservice.service';
import {MatStepperModule} from '@angular/material/stepper';
import { DialogDataT } from 'app/entreprise/entretient/rondez-vous/rondez-vous.component';

@Component({
  selector: 'app-envoyerTest',
  templateUrl: './envoyerTest.component.html',
  styleUrls: ['./envoyerTest.component.css']
})
export class envoyerTestComponent implements OnInit {
  durationInSeconds =  5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  envoyeTestform: any;

  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,private frmbuilder: FormBuilder,private http: HttpClient,
    private dataService: DataserviceService,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataT
    ) {     

    }
    public dialogRef: MatDialogRef<envoyerTestComponent>;
  ngOnInit() {
    this.envoyeTestform = this.frmbuilder.group({
      testlink: ['',Validators.required],
    })
  }

  
  openSnackBar(text) {
    this._snackBar.open(text, 'Fermer', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:1000,
    });
  }



  envoyetest(f){
    let donnee = {'id_c':this.data.id_candidat,
    'id_r':this.data.id_rdv,
    'testlink':f.testlink,
  };
  console.log(donnee);
    this.http.post('http://localhost/recruitini/Rendezvous/envoyerTest.php',donnee).subscribe(
      data => {
      
      },
      error => {
          console.log('Error', error);
      });

  }
      }


