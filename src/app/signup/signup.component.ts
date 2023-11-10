import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  public signupForm !: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient,  private router : Router) {}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      mobile: ['',Validators.required],
      staff: ['',Validators.required]
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:8081/api/signup",this.signupForm.value).subscribe({
      next: (res) => {
        alert("Sign Up Successful!");
        this.signupForm.reset();
        this.router.navigate(['login']);
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
