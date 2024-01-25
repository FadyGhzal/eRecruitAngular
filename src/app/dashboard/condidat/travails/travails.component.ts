import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DataserviceService } from 'app/dataservice.service';
import { seeCriteresComponent } from 'app/entreprise/gestionoffres/seecriteres/seecriteres.component';

@Component({
  selector: 'app-travails',
  templateUrl: './travails.component.html',
  styleUrls: ['./travails.component.css']
})
export class TravailsComponent implements OnInit {

  companies:any;
  accountType: string;
  isLogged: () => boolean;
  travails: any;
  niveaudata: any;
  candidatniveau: any;
  constructor(private ds : DataserviceService,private http: HttpClient,public dialog: MatDialog) {}

  ngOnInit() {

    this.accountType = this.ds.getAccountType();
      this.isLogged = this.ds.isLoggedIn;
    this.getOffresTravails();
    this.getCandidatNiveau()
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

Postuler(e_id,t_id,niveaudemande){
  if (this.candidatniveau < niveaudemande){
    alert("votre niveau ne correspond pas au niveau minimum demandé");

  }else{
    
  
  let idData = {'id':this.ds.getID(),'e_id':e_id,'t_id':t_id};
  console.log(idData);
       this.http.post('http://localhost/recruitini/Candidat/postuler.php',idData).subscribe(
      data => {
        console.log(data);
        alert("Postuler done!");
      
      },
      error => {
        alert("Vous avez déja postulé a cette offre!");
      });
    }
}

getCandidatNiveau(){
  let idData = {'id':this.ds.getID()};
       this.http.post('http://localhost/recruitini/Candidat/getNiveau.php',idData).subscribe(
      data => {
        this.niveaudata = data;
        this.candidatniveau = this.niveaudata[0];
      },
      error => {
          console.log('Error', error);
      });
}

openSeeCriteres(id) {
  this.dialog.open(seeCriteresComponent,  { 
    data: {
      idannonce: id
    } });

}

}
