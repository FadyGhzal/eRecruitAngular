import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FinishprofileComponent } from 'app/dashboard/condidat/finishprofile/finishprofile.component';
import {MatDialog} from '@angular/material/dialog';
import { AddTravailComponent } from 'app/entreprise/CUannonces/add-travail/add-travail.component';
import { UpdateTravailComponent } from 'app/entreprise/CUannonces/update-travail/update-travail.component';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { UpdateFormationComponent } from '../CUannonces/update-formation/update-formation.component';
import { DataserviceService } from 'app/dataservice.service';
import { UpdateStageComponent } from '../CUannonces/update-stage/update-stage.component';
import { seeCriteresComponent } from './seecriteres/seecriteres.component';

export interface DialogData {
  id_e: any;
  idannonce: number;
}
/**
 * @title Injecting data when opening a dialog
 */
 @Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-gestionoffres',
  templateUrl: './gestionoffres.component.html',
  styleUrls: ['./gestionoffres.component.css']
})
export class GestionoffresComponent implements OnInit {
  travails:any;
  dataForm: FormGroup;
  selectedtype:any;
  stages:any;
  formations:any;
  addform:any;
  updateform:any;
  durationInSeconds =  5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
   accountType: any;
   isLogged: any;

  constructor(private dataService: DataserviceService,private frmbuilder: FormBuilder,private http: HttpClient,public dialog: MatDialog,private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.accountType = this.dataService.getAccountType();
    this.isLogged = this.dataService.isLoggedIn;

    this.dataForm = this.frmbuilder.group({
      typeoff: ['', Validators.required],
      });

      this.selectedtype='t';
      this.getOffresStages();
      this.getOffresTravails();
      this.getOffresFormations();
  }




//TRAVAILS

getOffresTravails(){
  this.dataService.getAnnonces("travails").subscribe(
        data => {
         
          this.travails = data;
          console.log(data);
        },
        error => {
            console.log("Erreur");
        });

}

getOffresStages(){
  this.dataService.getAnnonces("stages").subscribe(
        data => {
         
          this.stages = data;
        },
        error => {
            console.log("Erreur");
        });

}

/////////////////

getOffresFormations(){
    this.dataService.getAnnonces("formations").subscribe(
          data => {
           
            this.formations = data;
          },
          error => {
              console.log("Erreur");
          });
  
}


//DELETE 


DeleteOffreFormation(id){
  let donnee = {'id':id};
  let c = confirm('Voulez vous supprimer cet offre de travail?');
  if (c) {
    
    this.http.post('http://localhost/recruitini/Formations/deleteFormation.php',donnee).subscribe(
      data => {
        console.log("deleted");
        this.getOffresFormations();
  
        
          this._snackBar.open('Announce supprimé!', 'Fermer', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        
  
      },
      error => {
          console.log('Error', error);
      });


  } else {
    this._snackBar.open('Action annulé', 'Fermer', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1000,
    });
  }

 

     
 }

 
DeleteOffreStage(id){
  let donnee = {'id':id};
  let c = confirm('Voulez vous supprimer cet offre de travail?');
      if (c) {
        
        this.http.post('http://localhost/recruitini/Stages/deleteStage.php',donnee).subscribe(
          data => {
            console.log("deleted");
            this.getOffresStages();
      
            
              this._snackBar.open('Announce supprimé!', 'Fermer', {
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
                duration: 1000,
              });
            
      
          },
          error => {
              console.log('Error', error);
          });


      } else {
        this._snackBar.open('Action annulé', 'Fermer', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 1000,
        });
      }
      
     
 }

//////////////



openAddTravailForm() {
  let dialogRef = this.dialog.open(AddTravailComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
    this.getOffresFormations();
    this.getOffresStages();
    this.getOffresTravails();
  });
}


openUpdateFormationForm(id) {
  this.dialog.open(UpdateFormationComponent,  { 
    data: {
      idannonce: id
    } });

}

openUpdateStageForm(id) {
  this.dialog.open(UpdateStageComponent,  { 
    data: {
      idannonce: id
    } });

}

  

openUpdateTravailForm(id) {
  this.dialog.open(UpdateTravailComponent,  { 
    data: {
      idannonce: id
    } });

}



DeleteOffreTravail(id){
 let donnee = {'id':id};
 let c = confirm('Voulez vous supprimer cet offre de travail?');
      if (c) {
        

        this.http.post('http://localhost/recruitini/Travails/deleteTravail.php',donnee).subscribe(
    data => {
      console.log("deleted");
      this.getOffresTravails();

      
        this._snackBar.open('Announce supprimé!', 'Fermer', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      

    },
    error => {
        console.log('Error', error);
    });


      } else {
        this._snackBar.open('Action annulé', 'Fermer', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 1000,
        });
      }

    
}



// criteres

openSeeCriteres(id) {
  this.dialog.open(seeCriteresComponent,  { 
    data: {
      idannonce: id
    } });

}


onChange($event) {
  let to = this.dataForm.get("typeoff").value

  if (to == "t") {
    this.selectedtype = "t";
    console.log(this.selectedtype , "is set to")
  }
  else if (to == "s") {
    this.selectedtype = "s";
  } else if (to == "f") {
    this.selectedtype = "f";
  }
}


togglePostulation(type,id_offre,action){
  let PostulationData = {'id':id_offre,'action':action};

if (type == "Travails"){
  this.http.post('http://localhost/recruitini/Travails/togglePostulation.php',PostulationData).subscribe(
    data => {
      this.getOffresTravails();
        this._snackBar.open('Status de recrutement a eté changé!', 'Fermer', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      });
    }else if (type == "Stages"){
      this.http.post('http://localhost/recruitini/Stages/togglePostulation.php',PostulationData).subscribe(
        data => {
          this.getOffresStages();
            this._snackBar.open('Status de recrutement a eté changé!', 'Fermer', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          });
        }
        else if (type == "Formations"){
          this.http.post('http://localhost/recruitini/Formations/togglePostulation.php',PostulationData).subscribe(
            data => {
              this.getOffresFormations();
                this._snackBar.open('Status de recrutement a eté changé!', 'Fermer', {
                  horizontalPosition: this.horizontalPosition,
                  verticalPosition: this.verticalPosition,
                });
              });
            }

    }
  


}


