import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  isLogged: () => boolean;
  accountType:string;
  demandes:any;
  myID:any;
  demandes_formation: any;
  demandes_stage: any;
  dataForm: any;
  selectedtype: string;
  constructor(private ds : DataserviceService,private frmbuilder: FormBuilder) { }

  ngOnInit() {

    
    this.selectedtype='Travail';
    this.dataForm = this.frmbuilder.group({
      typeoff: ['', Validators.required],
      });
      
    this.accountType = this.ds.getAccountType();
    this.isLogged = this.ds.isLoggedIn;
    this.getDemandesTravail();
    this.myID = this.ds.getID();
    this.getDemandesStage();
    this.getDemandesFormation();

}

onChange($event) {
  let to = this.dataForm.get("typeoff").value

  if (to == "Travail") {
    this.selectedtype = "Travail";
  }
  else if (to == "Stage") {
    this.selectedtype = "Stage";
  } else if (to == "Formation") {
    this.selectedtype = "Formation";
  }
}

getDemandesTravail(){
  let Data = {'type':'Travail'};
  this.ds.getDemandesHistory(Data).subscribe(
        data => {
         
          this.demandes = data;
        },
        error => {
            console.log("Erreur");
        });

}

getDemandesFormation(){
  let Data = {'type':'Formation'};
  this.ds.getDemandesHistory(Data).subscribe(
        data => {
         
          this.demandes_formation = data;
        },
        error => {
            console.log("Erreur");
        });

}

getDemandesStage(){
  let Data = {'type':'Stage'};
  this.ds.getDemandesHistory(Data).subscribe(
        data => {
         
          this.demandes_stage = data;
        },
        error => {
            console.log("Erreur");
        });

}


applyFilterTravail(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  if (filterValue == ''){
    this.getDemandesTravail();
  }else {
    this.demandes = this.demandes.filter(e => 
      e.PosteTravail.toLowerCase().includes(filterValue.trim().toLowerCase())
      );
  }
}

applyFilterFormation(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  if (filterValue == ''){
    this.getDemandesFormation();
  }else {
    this.demandes = this.demandes.filter(e => 
      e.Nomformation.toLowerCase().includes(filterValue.trim().toLowerCase())
      );
  }
}

applyFilterStage(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  if (filterValue == ''){
    this.getDemandesStage();
  }else {
    this.demandes = this.demandes.filter(e => 
      e.Postestage.toLowerCase().includes(filterValue.trim().toLowerCase())
      );
  }
}

}
