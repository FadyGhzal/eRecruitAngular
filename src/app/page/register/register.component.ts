import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogged: any;

  constructor(private ds : DataserviceService,private router : Router) {
    this.isLogged = this.ds.isLoggedIn();
   }

  ngOnInit() {

    if (this.isLogged == true) {

      this.router.navigate(['/dashboard/']);
     }
}
}
