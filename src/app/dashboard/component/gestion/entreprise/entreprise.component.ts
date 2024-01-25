import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
a3:any;
nlist:any;
entreprises:any;
  accountType: string;
  isLogged: () => boolean;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  constructor(private ds : DataserviceService,private http: HttpClient,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log(this.ds.getAccountType());
    this.accountType = this.ds.getAccountType();
    this.isLogged = this.ds.isLoggedIn;
    this.a3=true;
    this.getEntreprises();
   
  }

  getEntreprises(){
 
    this.ds.getUsers('Entreprise').subscribe(
      data => {
       
        this.entreprises = data;
      },
      error => {
          console.log("Erreur");
      });
    }


    controlEntreprise(id,action){
      let c = confirm('Voulez vous continuer?');
      if (c) {
      let actionData = {'id':id,'action':action};
      console.log("ACTION IS ",action);
      console.log("actionDATA : ",actionData);
      if (action == "Accept"){
      this.http.post('http://localhost/recruitini/Administration/controlEntreprise.php',actionData).subscribe(
        data => {
          this._snackBar.open('Enterprise validé!', 'Fermer', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 1 * 1000,
          });;
          this.getEntreprises();
        },
        error => {
            console.log('Error', error);

        });
      }else if (action == "Decline"){

        this.http.post('http://localhost/recruitini/Administration/controlEntreprise.php',actionData).subscribe(
          data => {
            this._snackBar.open('Entreprise refusé!', 'Fermer', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 1 * 1000,
            });
            this.getEntreprises();
          },
          error => {
              console.log('Error', error);
  
          });

      }
      else if (action == "Delete"){

        this.http.post('http://localhost/recruitini/Administration/controlEntreprise.php',actionData).subscribe(
          data => {
            this._snackBar.open('Enterprise supprimé!', 'Fermer', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: 1 * 1000,
            });
            this.getEntreprises();
          },
          error => {
              console.log('Error', error);
  
          });

      }
    }else{
      this._snackBar.open('Operation annulé!', 'Fermer', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 1 * 1000,
      });

    }
      
    }




applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  if (filterValue == ''){
    this.getEntreprises();
  }else {
    this.entreprises = this.entreprises.filter(e => 
      e.nom.toLowerCase().includes(filterValue.trim().toLowerCase())
      );
  }
}

}
