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
  selector: 'app-tas',
  templateUrl: './tas.component.html',
  styleUrls: ['./tas.component.scss']
})
export class TasComponent implements OnInit{
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

  public searchForm !: FormGroup
  constructor(private dataService: DataService,private formBuilder : FormBuilder, private http : HttpClient,  private router : Router) {}

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      msisdn: ['',Validators.required],
    })
  }
  data: any;
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
  
  handleButtonClick(){
    this.X=false;
  }
}
