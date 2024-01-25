import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-dashboard-c',
  templateUrl: './dashboard-c.component.html',
  styleUrls: ['./dashboard-c.component.css']
})
export class DashboardCComponent implements OnInit {


  isLogged: () => boolean;
  accountType:string;
  stats: any;

    constructor(private ds : DataserviceService) { }
  
    ngOnInit() {
      this.accountType = this.ds.getAccountType();
      this.isLogged = this.ds.isLoggedIn;
      this.getStats();
    }
    
    
    getStats(){
      this.ds.getStatistiques().subscribe(
        data => {
          this.stats = data;

        });
    
      }
}
