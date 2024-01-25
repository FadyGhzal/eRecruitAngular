import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule, MatExpansionModule, MatCardModule, MatTabsModule, MatDialogModule, MatSnackBarModule, MatToolbarModule, MatIconModule, MatChipsModule, MatListModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { AngularFileUploaderModule } from "angular-file-uploader";


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import 'hammerjs';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { ImagecardComponent } from './shared/imagecard/imagecard.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';
import { LoginComponent } from './page/login/login.component';
import { RootComponent } from './dashboard/root/root.component';
import { RegisterComponent } from './page/register/register.component';
import { LockComponent } from './page/lock/lock.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent } from './dashboard/component/panels/panels.component';

import { SettingsService } from './services/settings.service';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';
import { AdminDashboardComponent } from './dashboard/component/admin-dashboard/admin-dashboard.component';
import { StageComponent } from './dashboard/component/listeoffres/stage/stage.component';
import { TravailComponent } from './dashboard/component/listeoffres/travail/travail.component';
import { FormationComponent } from './dashboard/component/listeoffres/formation/formation.component';
import { EntrepriseComponent } from './dashboard/component/gestion/entreprise/entreprise.component';
import { CondidatComponent } from './dashboard/component/gestion/condidat/condidat.component';
import { TestComponent } from './dashboard/component/test/test.component';
import { HistoryComponent } from './dashboard/component/history/history.component';
import { AnonncesComponent } from './dashboard/condidat/anonnces/anonnces.component';
import { TravailsComponent } from './dashboard/condidat/travails/travails.component';
import { StagesComponent } from './dashboard/condidat/stages/stages.component';
import { FormationsComponent } from './dashboard/condidat/formations/formations.component';
import { ProfilecondidatComponent } from './dashboard/condidat/profilecondidat/profilecondidat.component';
import { LandingpageComponent } from './page/landingpage/landingpage.component';
import { ListecandidatComponent } from './entreprise/listecandidat/listecandidat.component';
import { GestionoffresComponent } from './entreprise/gestionoffres/gestionoffres.component';
import { HttpClientModule } from '@angular/common/http';
import { RondezVousComponent } from './entreprise/entretient/rondez-vous/rondez-vous.component';
import {MatSelectModule} from '@angular/material/select';

import { DashboardEComponent } from './entreprise/dashboard-e/dashboard-e.component';
import { DashboardCComponent } from './dashboard/condidat/dashboard-c/dashboard-c.component';
import { ProfileEComponent } from './entreprise/profile-e/profile-e.component';
import { DemandesComponent } from './dashboard/condidat/demandes/demandes.component';
import { RegisterEComponent } from './page/register-e/register-e.component';
import { RegisterCComponent } from './page/register-c/register-c.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FinishprofileComponent } from './dashboard/condidat/finishprofile/finishprofile.component';
import { AddTravailComponent } from './entreprise/CUannonces/add-travail/add-travail.component';
import { UpdateTravailComponent } from './entreprise/CUannonces/update-travail/update-travail.component';
import { UpdateFormationComponent } from './entreprise/CUannonces/update-formation/update-formation.component';
import { UpdateStageComponent } from './entreprise/CUannonces/update-stage/update-stage.component';
import { DemandesEComponent } from './entreprise/entretient/demandes/demandes.component';
import {MatStepperModule} from '@angular/material/stepper';
import { seeCriteresComponent } from './entreprise/gestionoffres/seecriteres/seecriteres.component';
import { seeCVComponent } from './dashboard/condidat/seecv/seecv.component';
import { donneRDVComponent } from './entreprise/entretient/donneRDV/donneRDV.component';
import { voirScoreComponent } from './entreprise/entretient/voirscore/voirscore.component';
import { DemandesStageComponent } from './entreprise/entretient/demandes_stage/demandes_stage.component';
import { DemandesFormationComponent } from './entreprise/entretient/demandes_formation/demandes_formation.component';
import { envoyerTestComponent } from './entreprise/entretient/envoyerTest/envoyerTest.component';
import { EntretientsComponent } from './dashboard/condidat/entretients/entretients.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    LockComponent,
    HeaderComponent,
    FooterComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent,
    AdminDashboardComponent,
    StageComponent,
    TravailComponent,
    FormationComponent,
    EntrepriseComponent,
    CondidatComponent,
    TestComponent,
    HistoryComponent,
    AnonncesComponent,
    TravailsComponent,
    StagesComponent,
    FormationsComponent,
    ProfilecondidatComponent,
    LandingpageComponent,
    ListecandidatComponent,
    GestionoffresComponent,
    RondezVousComponent,
    DemandesEComponent,
    DashboardEComponent,
    DashboardCComponent,
    ProfileEComponent,
    DemandesComponent,
    RegisterEComponent,
    RegisterCComponent,
    FinishprofileComponent,
    AddTravailComponent,
    UpdateTravailComponent,
    UpdateFormationComponent,
    UpdateStageComponent,
    seeCriteresComponent,
    seeCVComponent,
    donneRDVComponent,
    voirScoreComponent,
    DemandesStageComponent,
    DemandesFormationComponent,
    envoyerTestComponent,
    EntretientsComponent
    

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    TextFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    MatSelectModule,
    MatStepperModule,
    MatListModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFileUploaderModule

    
     
  ],
  providers: [SettingsService,GestionoffresComponent],
  bootstrap: [AppComponent],
  entryComponents: [AddTravailComponent,envoyerTestComponent,voirScoreComponent,donneRDVComponent,UpdateTravailComponent,UpdateFormationComponent,UpdateStageComponent,seeCriteresComponent,seeCVComponent],
})
export class AppModule { }
