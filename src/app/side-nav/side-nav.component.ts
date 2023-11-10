import { Component, OnInit } from '@angular/core';
import { faCoffee,faHand, faDashboard, faLocation, faShop, faBox, faContactBook  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit{
  faCoffee = faCoffee;
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faContactBook = faContactBook;
  faHand = faHand;

  isLogin(){
    if(window.sessionStorage.getItem('username')){
      return true;
    }
    return false;
  }
  constructor() { }
  ngOnInit(): void {
      
  }
}
