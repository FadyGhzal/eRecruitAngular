import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Data, Router } from '@angular/router';
import { DialogData } from 'app/entreprise/gestionoffres/gestionoffres.component';


@Component({
  selector: 'app-seecriteres',
  templateUrl: './seecriteres.component.html',
  styleUrls: ['./seecriteres.component.css']
})
export class seeCriteresComponent implements OnInit {
  durationInSeconds =  5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  eformFormation: any;
  id:any;

  constructor(private router:Router,private _snackBar: MatSnackBar,public dialog: MatDialog,private frmbuilder: FormBuilder,private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data: DialogData) { 



  }

criteres:any;
  ngOnInit() {

    this.id = this.data.idannonce;

 


  this.getCriteres(this.id);
   
  }


  getCriteres(id){
    let idData = {'id':id}
    console.log(idData);
    this.http.post('http://localhost/recruitini/Travails/getCriteres.php',idData).subscribe(
      data => {

        this.criteres = data;
        console.log(this.criteres);
        
      },
      error => {
          console.log('Error', error);
      });
  
  }
  

}
