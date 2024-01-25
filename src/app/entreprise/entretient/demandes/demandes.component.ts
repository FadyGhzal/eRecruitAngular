import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { seeCVComponent } from 'app/dashboard/condidat/seecv/seecv.component';
import { DataserviceService } from 'app/dataservice.service';
import { donneRDVComponent } from '../donneRDV/donneRDV.component';
import { voirScoreComponent } from '../voirscore/voirscore.component';


export interface DialogDataC {
  id:Number;
  id_entreprise: Number;
  id_candidat: Number;
  id_demande: Number;
  id_travail: Number;
}

export interface DialogDataScore {
  id:Number;
  id_candidat: Number;
  id_demande: Number;
  id_travail: Number;
}

/**
 * @title Injecting data when opening a dialog
 */
 @Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesEComponent implements OnInit {
  nlist:any;
  demandes:any;
  accountType: string;
  isLogged: () => boolean;
    constructor(private ds : DataserviceService,private http: HttpClient,public dialog: MatDialog) { }

    ngOnInit() {
      this.accountType = this.ds.getAccountType();
      this.isLogged = this.ds.isLoggedIn;
      this.getDemandesTravails();
     
    }
  
    getDemandesTravails(){

    let idData = {'id':this.ds.getID()};
console.log(idData);
     this.http.post('http://localhost/recruitini/Demandes/getDemandes.php',idData).subscribe(
    data => {
      console.log(data);
      this.demandes = data;
    
    },
    error => {
        console.log('Error', error);
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue == ''){
      this.getDemandesTravails();
    }else {
      this.demandes = this.demandes.filter(e => 
        e.PosteTravail.toLowerCase().includes(filterValue.trim().toLowerCase())
        );
    }
  }

  deleteDemande(id_d,id_e,id_c){
    let idData = {'id_d':id_d,'id_e':id_e,'id_c':id_c};

  }
 acceptDemande(id_d,id_e,id_c,id_t){
    let idData = {'id_d':id_d,'id_e':id_e,'id_c':id_c,'id_t':id_t};
    this.http.post('http://localhost/recruitini/Demandes/acceptDemande.php',idData).subscribe(
      data => {
       alert("demande accepté! un rdv a eté ajoute!");
      this.getDemandesTravails();
      },
      error => {
          console.log('Error', error);
      });

  }
  //acceptDemande(id_d,id_e,id_c){}
  declineDemande(id_d){
    let idData = {'id':id_d};
    this.http.post('http://localhost/recruitini/Demandes/declineDemande.php',idData).subscribe(
      data => {
        console.log(data);
      this.getDemandesTravails();
      },
      error => {
          console.log('Error', error);
      });
  

  }


  openSeeCV(id) {
    this.dialog.open(seeCVComponent,  { 
      data: {
        idannonce: id
      } });
  
  }

  openSeeScore(id_d,id_c,id_t) {
    this.dialog.open(voirScoreComponent,  { 
      data: {
        id_demande: id_d,
        id_travail: id_t,
        id_candidat: id_c,
      } });
  
  }
  

  openRDVassign(id_d,id_e,id_c,id_t) {
    let dialogRef = this.dialog.open(donneRDVComponent,  { 
      data: {
        id_demande: id_d,
        id_entreprise: id_e,
        id_travail: id_t,
        id_candidat: id_c,
      } });
      console.log(id_d);
    dialogRef.afterClosed().subscribe(result => {
      this.getDemandesTravails();
    });
  }
  

  }