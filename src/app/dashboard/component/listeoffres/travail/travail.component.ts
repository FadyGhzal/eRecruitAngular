import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-travail',
  templateUrl: './travail.component.html',
  styleUrls: ['./travail.component.css']
})
export class TravailComponent implements OnInit {
travails:any;
  accountType: string;
  isLogged: () => boolean;
  

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(private ds : DataserviceService,private http: HttpClient,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.accountType = this.ds.getAccountType();
    this.isLogged = this.ds.isLoggedIn;
    this.getOffresTravails();
  }


  deleteOffre(o_id){
    let c = confirm('Voulez vous supprimer cet offre?');
    if (c) {
      let donnee = {'id':o_id};
      this.http.post('http://localhost/recruitini/Travails/deleteTravail.php',donnee).subscribe(
        data => {

          this.getOffresTravails();
  
            this._snackBar.open('Offre de travail supprimé!', 'Fermer', {
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
  
  getOffresTravails(){
    this.ds.getOffres("Travails").subscribe(
          data => {
           
            this.travails = data;

          },
          error => {
              console.log("Erreur");
          });
  
}


applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  if (filterValue == ''){
    this.getOffresTravails();
  }else {
    this.travails = this.travails.filter(e => 
      e.poste_travail.toLowerCase().includes(filterValue.trim().toLowerCase())
      );
  }
}



}
