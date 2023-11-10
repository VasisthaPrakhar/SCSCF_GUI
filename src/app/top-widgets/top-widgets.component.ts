import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {

  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  reg: any;
  imsi_reg: any;
  pod: any;
  tas: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((response) => {
      console.log('====================================');
      console.log(response.size);
      console.log('====================================');
      let imsi_set = new Set();
      for (let res of response) {  
        for(let s of res.imsi_set){
          imsi_set.add(s);
        }   
      }
      this.imsi_reg=imsi_set.size;
      this.pod=window.localStorage.getItem('pod');
      // console.log(this.imsi_reg);
      // console.log(this.pod);  
    })
    this.dataService.getData4().subscribe((response) => {
      this.reg=response;
    })
  }

}