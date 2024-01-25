import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';
import { seeCVComponent } from 'app/dashboard/condidat/seecv/seecv.component';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-listecandidat',
  templateUrl: './listecandidat.component.html',
  styleUrls: ['./listecandidat.component.css']
})
export class ListecandidatComponent implements OnInit {
candidats:any;
  accountType: any;
  isLogged: any;
  searchForm: any;
  domaines:any;
  durationInSeconds =  5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  favcandidats: any;
  showFav: any;
  
  constructor(private _snackBar: MatSnackBar,private ds : DataserviceService,private http: HttpClient,public dialog: MatDialog,private frmbuilder: FormBuilder) { }

  ngOnInit() {
    this.showFav=false;
    this.accountType = this.ds.getAccountType();
    this.isLogged = this.ds.isLoggedIn;
    this.getCandidats();

    this.searchForm = this.frmbuilder.group({
      domaine: [''],
      niveau: [''],
      });

    this.domaines = ['Informatique',
    'Mecanique',
    'Business',
    'Electrique',
    'Industrielle'
  ]
  this.getFavCandidats();
  }

  getCandidats(){
 
    this.ds.getUsers('Candidat').subscribe(
      data => {
       
        this.candidats = data;
        console.log(this.candidats);
      },
      error => {
          console.log("Erreur");
      });
    }


    openSeeCV(id) {
      this.dialog.open(seeCVComponent,  { 
        data: {
          idannonce: id
        } });
    
    }




    filterCandidats(sf){

      let domaine = sf.domaine;
      let niveau = sf.niveau;
      console.log(sf);
      if (niveau != null){
        this.candidats = this.candidats.filter(e => 
          e.CandidatNiveau.includes(niveau)
          );
      }
      if (domaine != null){
        this.candidats = this.candidats.filter(e => 
          e.domaine.includes(domaine)
          );
      }
       if ((domaine != null) && (niveau != null)) {
        this.candidats = this.candidats.filter(e => 
          e.domaine.includes(domaine)
          );
          this.candidats = this.candidats.filter(e => 
            e.CandidatNiveau.includes(niveau)
            );
      }
      if (this.candidats.length == 0) {
        alert("il n'y a pas de candidats avec ces critères");
        this.getCandidats();
      }
    }

    resetCandidatsFilter(){
      this.getCandidats();
      this.searchForm.reset();
    }

    onChange($event){
      this.getCandidats();
    }


    favoriteCandidat(id_c,nom){
      let donnee = {'id':this.ds.getID(),
    'id_c':id_c};


    this.http.post('http://localhost/recruitini/Entreprise/favoritecandidat.php',donnee).subscribe(
      data => {
        console.log("Candidat ID : ", id_c ," is now favorited!");
        this.getFavCandidats();
        let message = nom + ' a été ajouté aux favoris.';
          this._snackBar.open(message, 'Fermer', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 1000,
          });
        
  
      },
      error => {
        this._snackBar.open('Ce candidat est deja favori', 'Fermer', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 1000,
        });
      });




    }

    unfavoriteCandidat(id_c,nom){
      let donnee = {'id':this.ds.getID(),
    'id_c':id_c};


    this.http.post('http://localhost/recruitini/Entreprise/unfavoritecandidat.php',donnee).subscribe(
      data => {
        this.getFavCandidats();
          let message = nom + ' a été retiré des candidats favoris.';
          this._snackBar.open(message, 'Fermer', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 1000,
          });
        
  
      },
      error => {
          console.log('Error', error);
      });




    }


    getFavCandidats(){
      let donnee = {'id':this.ds.getID()};

      this.http.post('http://localhost/recruitini/Entreprise/getfavoritecandidats.php',donnee).subscribe(
        data => {
          this.favcandidats = data;
        },
        error => {
            console.log('Error', error);
        });

    }

    toggleShowFavorite(){
      if (this.showFav) {
        this.showFav = false;
      }else {
        this.showFav = true;
      }
    }
}
