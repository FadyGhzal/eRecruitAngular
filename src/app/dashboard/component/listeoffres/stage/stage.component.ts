import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  stages:any;
  accountType: string;
  isLogged: () => boolean;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  

  constructor(private ds : DataserviceService,private http: HttpClient,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.accountType = this.ds.getAccountType();
    this.isLogged = this.ds.isLoggedIn;
 this.getOffresStages();
  }

  
  deleteOffre(o_id){
    let c = confirm('Voulez vous supprimer cet offre?');
    if (c) {
      let donnee = {'id':o_id};
      this.http.post('http://localhost/recruitini/Stages/deleteStage.php',donnee).subscribe(
        data => {

          this.getOffresStages();
  
            this._snackBar.open('Offre de stage supprimé!', 'Fermer', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          
    
        },
        error => {
            console.log('Error', error);
        });
  
    }
    else
    {
      this._snackBar.open('operation annulé!', 'Fermer', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 1 * 1000,
      });
    }
  }

  getOffresStages(){
    this.ds.getOffres("Stages").subscribe(
          data => {
           
            this.stages = data;

          },
          error => {
              console.log("Erreur");
          });
  
}


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  if (filterValue == ''){
    this.getOffresStages();
  }else {
    this.stages = this.stages.filter(e => 
      e.poste_stage.toLowerCase().includes(filterValue.trim().toLowerCase())
      );
  }
}




}
