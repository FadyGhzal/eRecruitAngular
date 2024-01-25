import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-dashboard-e',
  templateUrl: './dashboard-e.component.html',
  styleUrls: ['./dashboard-e.component.css']
})
export class DashboardEComponent implements OnInit {

  isLogged:boolean;
  accountType:string;
  stats: any;
  nBannonce: number;
  
    constructor(private ds : DataserviceService) { }

    ngOnInit() {
      this.accountType = this.ds.getAccountType();
      this.isLogged = this.ds.isLoggedIn();
      this.getStats();
    }
    
    
    getStats(){
      this.ds.getStatistiques().subscribe(
        data => {
          this.stats = data;
          this.nBannonce = parseInt(this.stats[0]['nbT']) + parseInt(this.stats[0]['nbF']) + 
          parseInt(this.stats[0]['nbS']) ;
  
          //TOTAL OFFRES , TOTAL CANDIDATS WORKING , TOTAL CANDIDATS NOT WORKING , TOTAL ENTREPRISES
        });
    
      }
   

}
