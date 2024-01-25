import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  accountType: string;
  isLogged: () => boolean;
  stats:any;
  nBannonce:number;
  constructor(private frmbuilder: FormBuilder,private ds : DataserviceService) { }

  ngOnInit() {
    this.accountType = this.ds.getAccountType();
    this.isLogged = this.ds.isLoggedIn;

    this.getStats();
}


getStats(){
  this.ds.getStatistiques().subscribe(
    data => {
      this.stats = data;
      console.log(this.stats);
      this.nBannonce = parseInt(this.stats[0]['nbT']) + parseInt(this.stats[0]['nbF']) + 
      parseInt(this.stats[0]['nbS'])  ;

    });

  }
}