import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
step:any;
  isLogged: boolean;
  constructor(private ds : DataserviceService,private router : Router) {
    this.isLogged = this.ds.isLoggedIn();
   }

  ngOnInit() {

    if (this.isLogged == true) {

      this.router.navigate(['/dashboard/']);
     }
    this.step =1;
  }

  
maketheshow(){

  if (this.step == 1) {
    this.step = 2;
  }else if (this.step == 2){
    this.step = 3;
  }else if (this.step == 3){
    this.step =1;
  }
}

  
}
