import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-condidat',
  templateUrl: './condidat.component.html',
  styleUrls: ['./condidat.component.css']
})
export class CondidatComponent implements OnInit {
  accountType: string;
  isLogged: () => boolean;
  candidats:any;
  constructor(private ds : DataserviceService,private http: HttpClient) { }

  ngOnInit() {
    this.accountType = this.ds.getAccountType();
    this.isLogged = this.ds.isLoggedIn;
    this.getCandidats();

    }

    getCandidats(){
 
      this.ds.getUsers('Candidat').subscribe(
        data => {
         
          this.candidats = data;
          console.log(this.candidats);
        },
        error => {
            console.log("Erreur");
        });
      }

      deleteCandidat(id){

        let candidatData = {'id':id};
        this.http.post('http://localhost/recruitini/Administration/deleteCandidat.php',candidatData).subscribe(
          data => {
            alert("Candidat supprimé!");
            this.getCandidats();
          },
          error => {
              console.log('Error', error);
  
          });
      }

      
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  if (filterValue == ''){
    this.getCandidats();
  }else {
    this.candidats = this.candidats.filter(e => 
      e.nom.toLowerCase().includes(filterValue.trim().toLowerCase())
      );
  }
}

    }
