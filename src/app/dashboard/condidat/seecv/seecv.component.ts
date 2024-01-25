import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Data, Router } from '@angular/router';
import { DialogData } from 'app/entreprise/gestionoffres/gestionoffres.component';


@Component({
  selector: 'app-seecv',
  templateUrl: './seecv.component.html',
  styleUrls: ['./seecv.component.css']
})
export class seeCVComponent implements OnInit {
  durationInSeconds =  5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  eformFormation: any;
  id:any;

  constructor(private router:Router,private _snackBar: MatSnackBar,public dialog: MatDialog,private frmbuilder: FormBuilder,private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data: DialogData) { 



  }

CVData:any;
  ngOnInit() {

    this.id = this.data.idannonce;

 


  this.getCandidatCV(this.id);
   
  }


  getCandidatCV(id){
    let idData = {'id':id}
    console.log(idData);
    this.http.post('http://localhost/recruitini/Account/readCandidatCV.php',idData).subscribe(
      data => {

        this.CVData = data;
        console.log(this.CVData);
        
      },
      error => {
          console.log('Error', error);
      });
  
  }
  

}
