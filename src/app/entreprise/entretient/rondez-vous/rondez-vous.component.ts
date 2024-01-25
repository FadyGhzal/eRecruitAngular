import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataserviceService } from 'app/dataservice.service';
import { envoyerTestComponent } from '../envoyerTest/envoyerTest.component';


export interface DialogDataT {
  id:Number;
  id_candidat: Number;
  id_rdv: Number;
}

/**
 * @title Injecting data when opening a dialog
 */
 @Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-rondez-vous',
  templateUrl: './rondez-vous.component.html',
  styleUrls: ['./rondez-vous.component.css']
})
export class RondezVousComponent implements OnInit {
  rendezvous:any;
  accountType: string;
  isLogged: () => boolean;

  constructor(private ds : DataserviceService,private http: HttpClient,public dialog: MatDialog) { }

    ngOnInit() {
      this.accountType = this.ds.getAccountType();
      this.isLogged = this.ds.isLoggedIn;
      this.getRendezvous();
     
    }
  
    getRendezvous(){

      let idData = {'id':this.ds.getID()};
  console.log(idData);
       this.http.post('http://localhost/recruitini/Rendezvous/getRdv.php',idData).subscribe(
      data => {
        console.log(data);
        this.rendezvous = data;
      
      },
      error => {
          console.log('Error', error);
      });
  
    }
  

    acceptCandidat(id_r,id_c){
      let idData = {'id_r':id_r,'id_c':id_c};
      this.http.post('http://localhost/recruitini/Rendezvous/acceptRdv.php',idData).subscribe(
        data => {
         alert("Ce candidat a eté accepté(e).");
        this.getRendezvous();
        },
        error => {
            //console.log('Error', error);
            alert("ce candidat travaille déjà dans une autre entreprise.");
        });
  
    }
    //acceptDemande(id_d,id_e,id_c){}
    declineCandidat(id_r){
      let idData = {'id_r':id_r};

      console.log(id_r);
      this.http.post('http://localhost/recruitini/Rendezvous/declineRdv.php',idData).subscribe(
        data => {
          console.log(data);
        this.getRendezvous();
        },
        error => {
            console.log('Error', error);
        });
    
  
    }
  
    deleteRdv(id_r){
      //console.log(id_r);
      let idData = {'id_r':id_r};
      this.http.post('http://localhost/recruitini/Rendezvous/deleteRdv.php',idData).subscribe(
        data => {
          alert("Les données de l'entretien ont été supprimées.")
        this.getRendezvous();
        },
        error => {
            console.log('Error', error);
        });
    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue == ''){
      this.getRendezvous();
    }else {
      this.rendezvous = this.rendezvous.filter(e => 
        e.PosteTravail.toLowerCase().includes(filterValue.trim().toLowerCase())
        );
    }
  }


  openEnvoyerTest(id_c,id_r) {
    this.dialog.open(envoyerTestComponent,  { 
      data: {
        id_candidat: id_c,
        id_rdv: id_r,
      } });
  
  }

  }