import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLogin(){
    if(window.sessionStorage.getItem('username')){
      return true;
    }
    return false;
  }

}
