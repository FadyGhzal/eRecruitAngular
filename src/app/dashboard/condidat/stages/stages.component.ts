import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {
  companies:any;
  accountType: string;
  isLogged: () => boolean;
  stages: any;
  candidatniveau: any;
  niveaudata: Object;
  constructor(private ds : DataserviceService,private http: HttpClient) {}

  ngOnInit() {

    this.accountType = this.ds.getAccountType();
      this.isLogged = this.ds.isLoggedIn;
    this.getOffresStages();
    this.getCandidatNiveau();

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

Postuler(e_id,s_id,niveaudemande){
  if (this.candidatniveau < niveaudemande){
    alert("votre niveau ne correspond pas au niveau minimum demandé pour ce stage");

  }else{
    
  
  let idData = {'id':this.ds.getID(),'e_id':e_id,'s_id':s_id};
  console.log(idData);
       this.http.post('http://localhost/recruitini/Candidat/postuler_stage.php',idData).subscribe(
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


}
