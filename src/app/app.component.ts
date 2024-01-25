import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isLogged:any;
  constructor(private dataService: DataserviceService) {

 this.isLogged = this.dataService.isLoggedIn();

}
}
