import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { seeCVComponent } from 'app/dashboard/condidat/seecv/seecv.component';
import { DataserviceService } from 'app/dataservice.service';


@Component({
  selector: 'app-demandes_stage',
  templateUrl: './demandes_stage.component.html',
  styleUrls: ['./demandes_stage.component.css']
})
export class DemandesStageComponent implements OnInit {
  nlist:any;
  demandes:any;
  accountType: string;
  isLogged: () => boolean;
    constructor(private ds : DataserviceService,private http: HttpClient,public dialog: MatDialog) { }

    ngOnInit() {
      this.accountType = this.ds.getAccountType();
      this.isLogged = this.ds.isLoggedIn;
      this.getDemandesStages();
     
    }
  
    getDemandesStages(){

    let idData = {'id':this.ds.getID()};
console.log(idData);
     this.http.post('http://localhost/recruitini/Demandes/getDemandesStage.php',idData).subscribe(
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
      this.getDemandesStages();
    }else {
      this.demandes = this.demandes.filter(e => 
        e.PosteTravail.toLowerCase().includes(filterValue.trim().toLowerCase())
        );
    }
  }

  gererDemande(id_d,action){
    let idData = {'id_d':id_d,'action':action};
    this.http.post('http://localhost/recruitini/Demandes/gererDemandeStage.php',idData).subscribe(
      data => {
       alert("demande accepté! un rdv a eté ajoute!");
      this.getDemandesStages();
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

  

  }