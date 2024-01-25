/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { SweetAlertComponent } from './dashboard/sweetalert/sweetalert.component';

import { PriceTableComponent } from './dashboard/component/pricetable/pricetable.component';
import { PanelsComponent} from './dashboard/component/panels/panels.component';
import { WizardComponent } from './dashboard/component/wizard/wizard.component';
import { AdminDashboardComponent } from './dashboard/component/admin-dashboard/admin-dashboard.component';
import { TravailComponent } from './dashboard/component/listeoffres/travail/travail.component';
import { StageComponent } from './dashboard/component/listeoffres/stage/stage.component';

import { RootComponent } from './dashboard/root/root.component';
import { LoginComponent } from './page/login/login.component';
import { LockComponent } from './page/lock/lock.component';
import { RegisterComponent } from './page/register/register.component';
import { CondidatComponent } from './dashboard/component/gestion/condidat/condidat.component';
import { EntrepriseComponent } from './dashboard/component/gestion/entreprise/entreprise.component';
import { FormationComponent } from './dashboard/component/listeoffres/formation/formation.component';
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
import { RondezVousComponent } from './entreprise/entretient/rondez-vous/rondez-vous.component';
import { DemandesEComponent} from './entreprise/entretient/demandes/demandes.component';
import { DashboardEComponent } from './entreprise/dashboard-e/dashboard-e.component';
import { DashboardCComponent } from './dashboard/condidat/dashboard-c/dashboard-c.component';
import { ProfileEComponent } from './entreprise/profile-e/profile-e.component';
import { DemandesComponent } from './dashboard/condidat/demandes/demandes.component';
import { RegisterEComponent } from './page/register-e/register-e.component';
import { RegisterCComponent } from './page/register-c/register-c.component';
import { FinishprofileComponent } from './dashboard/condidat/finishprofile/finishprofile.component';
import { AddTravailComponent } from './entreprise/CUannonces/add-travail/add-travail.component';
import { UpdateTravailComponent } from './entreprise/CUannonces/update-travail/update-travail.component';
import { DemandesStageComponent } from './entreprise/entretient/demandes_stage/demandes_stage.component';
import { DemandesFormationComponent } from './entreprise/entretient/demandes_formation/demandes_formation.component';
import { EntretientsComponent } from './dashboard/condidat/entretients/entretients.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'lock', component: LockComponent},
  {path: 'welcome', component: LandingpageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: RootComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'table', component: TableComponent},
    {path: 'notification', component: NotificationComponent},
    {path: 'alert', component: SweetAlertComponent},
    {path: 'components/price-table', component: PriceTableComponent},
    {path: 'components/panels', component: PanelsComponent},
    {path: 'components/wizard', component: WizardComponent},
    {path: 'components/dashboard_admin', component: AdminDashboardComponent},
    {path: 'components/stage', component: StageComponent},
    {path: 'components/travail', component: TravailComponent},
    {path: 'components/condidat', component: CondidatComponent},
    {path: 'components/entreprise', component: EntrepriseComponent},
    {path: 'components/formation', component: FormationComponent},
    {path: 'components/test', component: TestComponent},
    {path: 'components/home', component: HomeComponent},
    {path: 'components/history', component: HistoryComponent},
    {path: 'components/travails', component: TravailsComponent},
    {path: 'components/stages', component: StagesComponent},
    {path: 'components/formations', component: FormationsComponent},
    {path: 'components/Anonnces', component: AnonncesComponent},
    {path: 'components/condidat/profilecondidat', component: ProfilecondidatComponent},
    {path : 'components/entretients', component : EntretientsComponent},
    {path : 'components/entreprise/listecondidat', component : ListecandidatComponent},
    {path : 'components/entreprise/gestionoffres', component : GestionoffresComponent},
    {path : 'components/entreprise/entretient/rondez_vous', component : RondezVousComponent},
    {path : 'components/entreprise/entretient/demandes', component : DemandesEComponent},
    {path : 'components/entreprise/entretient/demandes_stage', component : DemandesStageComponent},
    {path : 'components/entreprise/entretient/demandes_formation', component : DemandesFormationComponent},
    {path : 'dashboarde', component : DashboardEComponent},
    {path : 'dashboardc', component : DashboardCComponent},
    {path : 'entrepriseprofile', component : ProfileEComponent},
    {path : 'demandes', component : DemandesComponent},
    {path : 'registere', component : RegisterEComponent},
    {path : 'registerc', component : RegisterCComponent},
    {path : 'finishprofile', component : FinishprofileComponent},
    {path : '**', component : HomeComponent},

  ]}
];

export const routing = RouterModule.forRoot(routes);

