import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataserviceService } from 'app/dataservice.service';



@Component({
  selector: 'app-entretients',
  templateUrl: './entretients.component.html',
  styleUrls: ['./entretients.component.css']
})
export class EntretientsComponent implements OnInit {
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
       this.http.post('http://localhost/recruitini/Candidat/getEntretientsCandidat.php',idData).subscribe(
      data => {
        console.log(data);
        this.rendezvous = data;
      
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


  }