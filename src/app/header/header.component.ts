import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  getUsernameFromLocalStorage() {
    const username = window.sessionStorage.getItem('username');
    return username;
  }
  getInitialFromLocalStorage() {
    const username = window.sessionStorage.getItem('username');
    let initials = '';
    if(username){
      const words = username.split(' ');    
      for (const word of words) {
        if (word.length > 0) {
          initials += word[0].toUpperCase();
        }
      }
    }
    return initials;
  }
  isLogin(){
    if(window.sessionStorage.getItem('username')){
      return true;
    }
    return false;
  }
  logout(){
    window.sessionStorage.clear();
  }

}
