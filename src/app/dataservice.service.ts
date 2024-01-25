import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Usermodule } from './models/usermodule';
 
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  redirectUrl!: string;
  isUserAdmin:any;
  baseUrl:string = "http://localhost/recruitini/Account";
  
  constructor(private httpClient : HttpClient) { }
  accx:any;
  public LoginUser(email: any, pass: any) {
    return this.httpClient.post<any>(this.baseUrl + '/Login.php', { email, pass })
        .pipe(map(Usermodule => {
          this.saveUser(Usermodule[0].nom);
          this.saveID(Usermodule[0].id);
         

          let donnee = {'id':Usermodule[0].id};
         this.httpClient.post(this.baseUrl + '/check.php',donnee).subscribe(
            data => {
                this.saveAccountType(data[0].AccountType);
                if (data[0].VERIFIED) {
                  if (data[0].VERIFIED == 0){
                  
                    this.deleteData();
                    window.location.href = ('/');
                    alert("Veuillez patienter jusqu'à ce qu'un administrateur vérifie votre compte!");
                    return;
                  }
                }
              
              }
      

                
                
        );

            return Usermodule;
        }));
       
}



public RegisterUser(nom: any,pass:any,email:any,ACCTYPE:any,domaine:any,site:any,telephone:any,adresse:any) {
    console.log(nom);
    console.log(pass);
    console.log(email);
  return this.httpClient.post<any>(this.baseUrl + '/Registration.php', { nom,pass,email,ACCTYPE,domaine,site,telephone,adresse}).pipe(map(Usermodule => {
    return Usermodule;

}));


};



  saveAccountType(acctype:string){
    localStorage.setItem('accountType',acctype);
  }

  getAccountType() {
    return localStorage.getItem('accountType');
  }

  saveUser(token: string) {
    localStorage.setItem('nom', token);
  }

  getUser() {
    return localStorage.getItem('nom');
  }

  saveID(token:string){
    localStorage.setItem('ID', token);
  }

  getID() {
    return localStorage.getItem('ID');
  }


  deleteData() {
    localStorage.removeItem('nom');
    localStorage.removeItem('accountType');
    localStorage.removeItem('ID');

  }
  
  
  isLoggedIn() {
    const usertoken = this.getUser();
    if (usertoken != null) {
      return true
    }
    return false;
  }


  //GET ANNONCES POUR CHAQUE ENTREPRISE

  getAnnonces(typeannonce){
    if (typeannonce == "formations") {
    return this.httpClient.post('http://localhost/recruitini/Formations/readFormation.php',{'id':this.getID()})
  }else if (typeannonce == "travails") {
    return this.httpClient.post('http://localhost/recruitini/Travails/readTravail.php',{'id':this.getID()})
  }else if (typeannonce == "stages"){
    return this.httpClient.post('http://localhost/recruitini/Stages/readStage.php',{'id':this.getID()})
  }
}

  //GET TOUS LES ANNONCES POUR CANDIDAT

getOffres(typeannonce){
  return this.httpClient.post('http://localhost/recruitini/Candidat/getOffres.php',{'typeo':typeannonce})
}

// GET DEMANDES DE CHAQUE CANDIDAT 
getDemandesTravail(idData){
  return this.httpClient.post('http://localhost/recruitini/Candidat/readDemandes.php',idData)
}
getDemandesFormation(idData){
  return this.httpClient.post('http://localhost/recruitini/Candidat/readDemandesFormation.php',idData)
}
getDemandesStage(idData){
  return this.httpClient.post('http://localhost/recruitini/Candidat/readDemandesStage.php',idData)
}

getRendezvous(idData){
  return this.httpClient.post('http://localhost/recruitini/Rendezvous/getRdv.php',idData)
}



getDemandesHistory(Data){
  return this.httpClient.post('http://localhost/recruitini/Administration/getDemandes.php',Data)
}

getProfileData(){

  let idData = {'id': this.getID()};

  return this.httpClient.post<any>(this.baseUrl + '/Profile.php', idData)
}


//GET USERS

getUsers(usertype){
  let userType = {'usertype': usertype};
  return this.httpClient.post<any>('http://localhost/recruitini/Administration/getUsers.php',userType);

}


//GET STATS

getStatistiques(){
  return this.httpClient.get('http://localhost/recruitini/getStatistiques.php');
}

//CHECK IF CANDIDAT's PROFILE FINISHED?

isProfileFinished(){
  return this.httpClient.post<any>('http://localhost/recruitini/Profile/hasFinishedProfile.php',{'id':this.getID()});
}



}

 