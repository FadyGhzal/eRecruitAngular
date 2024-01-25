import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  accountType: any;
  isLogged: any;
  formations: any;
  candidatniveau: any;
  niveaudata: Object;
  constructor(private ds : DataserviceService,private http: HttpClient) {}

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



Postuler(e_id,f_id,niveaudemande){
  if (this.candidatniveau < niveaudemande){
    alert("votre niveau ne correspond pas au niveau minimum demandé pour cette formation");

  }else{
    
  
  let idData = {'id':this.ds.getID(),'e_id':e_id,'f_id':f_id};
  console.log(idData);
       this.http.post('http://localhost/recruitini/Candidat/postuler_formation.php',idData).subscribe(
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