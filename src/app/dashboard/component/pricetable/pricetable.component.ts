import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricetable',
  templateUrl: './pricetable.component.html',
  styleUrls: ['./pricetable.component.css']
})
export class PriceTableComponent implements OnInit {
companies:any;
  constructor() { }

  ngOnInit() {
    this.companies = [
      {'Name':'Orange','Description':'AAA','IsRecruiting':1},
      {'Name':'Telecom','Description':'AAA a7a','IsRecruiting':0},
    ]
  }

}
