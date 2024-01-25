import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { DataserviceService } from 'app/dataservice.service';

@Component({
  selector: 'app-anonnces',
  templateUrl: './anonnces.component.html',
  styleUrls: ['./anonnces.component.css']
})
export class AnonncesComponent implements OnInit {
/*fileData: File = null;

  isLogged: () => boolean;
  accountType:string;
  frmbuilder: any;*/
  constructor(private ds : DataserviceService,private http: HttpClient) { }


  //fileProgress(fileInput: any) {
  //  this.fileData = <File>fileInput.target.files[0];
//}
 /*
upload() {
    const uploadForm = new FormData();
    uploadForm.append('file', this.fileData);
    console.log(this.fileData);
    this.http.post('http://localhost/recruitini/test.php', uploadForm)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      })
}*/




  ngOnInit() {
  
/*

    this.upload = this.frmbuilder({  
      file: ['',Validators.required],
    })

}*/
}

 
}
