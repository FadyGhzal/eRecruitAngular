import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  acctype:string;
  isLogged: boolean;
  username: string;
  constructor(private dataService : DataserviceService,private router:Router) {}

  ngOnInit() {
    this.username = this.dataService.getUser();
    this.isLogged = this.dataService.isLoggedIn();
    this.acctype = this.dataService.getAccountType();
    if (!this.icon) {
      this.icon = "more_vert";
    }
  }

  logout(){
    this.dataService.deleteData();
    setTimeout(() => {
      this.router.navigate(['/']);
  }, 500);

    
  }

  menuClick() {
   // document.getElementById('main-panel').style.marginRight = '260px';
  }
}
