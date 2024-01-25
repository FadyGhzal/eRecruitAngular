import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
formations:any;
  accountType: string;
  isLogged: () => boolean;
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(private ds : DataserviceService,private http: HttpClient,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.accountType = this.ds.getAccountType();
    this.isLogged = this.ds.isLoggedIn;
    this.getOffresFormations();
  }

  getOffresFormations(){
    this.ds.getOffres("Formations").subscribe(
          data => {
           
            this.formations = data;

          },
          error => {
              console.log("Erreur");
          });
  
}




deleteOffre(o_id){
  let c = confirm('Voulez vous supprimer cet offre?');
  if (c) {
    let donnee = {'id':o_id};
    this.http.post('http://localhost/recruitini/Formations/deleteFormation.php',donnee).subscribe(
      data => {
        console.log("deleted");
        this.getOffresFormations();
  
        
          this._snackBar.open('Offre de formation supprimé!', 'Fermer', {
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

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  if (filterValue == ''){
    this.getOffresFormations();
  }else {
    this.formations = this.formations.filter(e => 
      e.nom_formation.toLowerCase().includes(filterValue.trim().toLowerCase())
      );
  }
}

}
