import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  dataForm: any;
  frmbuilder: any;
  companies: { Name: string; Description: string; Verified: number; }[];

  constructor() { }

  ngOnInit() {
    
    this.dataForm = this.frmbuilder.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      });

    this.companies = [
      {'Name':'Orange','Description':'AAA','Verified':0},
      {'Name':'Telecom','Description':'AAA a7a','Verified':1},
    ]
  }
  verify(n){

    console.log(n + " is verified");
      }
      decline(n){
        console.log(n + " is declined.");
      }
    
      PostData(dataForm1){
        let row = {'Name':dataForm1['Name'],'Description':dataForm1['Description'],'Verified':0};
        console.log(row);
        this.companies.push(row);
        }

}
