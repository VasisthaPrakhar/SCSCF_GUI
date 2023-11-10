import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

import {
  faLocation,
  faShop,
  faBoxes,
  faMoneyBill,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scscf',
  templateUrl: './scscf.component.html',
  styleUrls: ['./scscf.component.scss']
})
export class ScscfComponent implements OnInit {
  faLocation = faLocation;
  faShop = faShop;
  faBoxes = faBoxes;
  faMoneyBill = faMoneyBill;
  faSearch = faSearch;
  reg: any;
  imsi_reg: any;
  pod: any;
  tas: any;
  X:any;
  X1: any;

  public searchForm !: FormGroup
  constructor(private dataService: DataService,private formBuilder : FormBuilder, private http : HttpClient,  private router : Router) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      msisdn: ['',Validators.required],
    })
  }
  data: any;
  data1: any;
  searchUp(){
    this.X=true;
    console.log(this.searchForm.value.msisdn);
    this.dataService.getData2(this.searchForm.value.msisdn).subscribe((response) => {
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        this.data=response;      
    })
  }
  searchUp1(){
    this.X1=true;
    console.log(this.searchForm.value.msisdn);
    this.dataService.getData3(this.searchForm.value.msisdn).subscribe((response) => {
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        this.data1=response;      
    })
  }
  handleButtonClick(){
    this.X=false;
    this.X1=false;
  }
}
