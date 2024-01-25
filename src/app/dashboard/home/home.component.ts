import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accountType: string;
  notesform: any;
  notesdata: Object;
  constructor(private ds : DataserviceService,private frmbuilder: FormBuilder,private http: HttpClient) {
  }

  ngOnInit() {
    this.accountType = this.ds.getAccountType();
    this.notesform = this.frmbuilder.group({
      content: ['', null],
  })

   this.getData();
  }


  
  getData(){
    let donnee = {'userid' : this.ds.getID()};
    this.http.post('http://localhost/recruitini/Administration/getnotes.php',donnee).subscribe(
        data => {
            this.notesdata = data;
            console.log('Data fetched is successful ', data);
        },
        error => {
            console.log('Error', error);
        }
    );
}


SaveData(dataForm) {
    if (dataForm.content == "") {
      alert("Note resetted");
    } else {
     alert("Note saved!");
    }

    let donnee = {'userid' : this.ds.getID() , 'content' : dataForm.content};
  this.http.post('http://localhost/recruitini/Administration/updatenotes.php', donnee).subscribe(
      data => {
          console.log('Update Request is successful ', data);
          this.getData();
          this.notesdata = data;
      },
      error => {
          console.log('Error', error);
      }
  );
}

}
