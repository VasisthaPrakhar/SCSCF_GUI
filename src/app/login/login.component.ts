import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',Validators.required]
    })
  }
  
  login(){
    this.http.get<any>("http://localhost:8081/api/signup").subscribe({
      next: (res) => {
        const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if(user){
          alert("Login Success");
          this.loginForm.reset();
          sessionStorage.setItem("username", user.fullname);
          this.router.navigate(['dashboard']);
        }else{
          alert("User Not Available In our Database !!!!");
          this.loginForm.reset();
          this.router.navigate(['signup']);
        }
      },
      error: (err) => {
        alert("Something Went Wrong !!!");
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      }
    })
  }

}
