import {AfterViewInit, Component, OnInit, OnDestroy, Input} from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { ROUTES } from './sidebar-routes.config';
import { EROUTES } from './sidebar-Eroutes.config';
import { CROUTES } from './sidebar-Croutes.config';
import { DataserviceService } from 'app/dataservice.service';
import { MatDialog, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { FinishprofileComponent } from 'app/dashboard/condidat/finishprofile/finishprofile.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {

  public accountType:string;
  public color: string;
  public menuItems: object;
  public EmenuItems: object;
  public CmenuItems: object;
  public activeFontColor: string;
  public normalFontColor: string;
  public dividerBgColor: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  isLogged: boolean;
  constructor(public settingsService: SettingsService,private dataService : DataserviceService,private _snackBar: MatSnackBar,public dialog: MatDialog) {


    
    this.menuItems = ROUTES;
    this.EmenuItems = EROUTES;
    this.CmenuItems = CROUTES;
    this.activeFontColor = 'rgba(0,0,0,.6)';
    this.normalFontColor = 'rgba(255,255,255,.8)';
    this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
  }


  ngOnInit() {
    this.isLogged = this.dataService.isLoggedIn();
    this.accountType = this.dataService.getAccountType();
    if (this.accountType == "Candidat"){
    this.dataService.isProfileFinished().subscribe(
      data => {
        if (data[0] == 'FinishedFALSE'){
          this.openFinishProfile();
          console.log("Completer votre profile SVP!");
     }} );
      
      }
    

  }


  openFinishProfile() {
    let dialogRef = this.dialog.open(FinishprofileComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      this._snackBar.open('merci de compléter votre profil.', 'Fermer', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 1000,
      });
    });
  }

  ngOnDestroy() {
 
      this.accountType = "";

  }

  ngAfterViewInit() {
    this.accountType = this.dataService.getAccountType();
    
  }
 
}

