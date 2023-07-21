import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username="";
  Password="";
  errorMsg="";
  constructor(private auth :AuthService ,private router :Router ,private userService:AuthService){
   
  }
  

  ngOnInit(): void {
  }

  Login(){
    
    this.userService.setUsername(this.username);

  if(this.username.trim().length===0){
     this.errorMsg ="Please enter UserName";
  }else if(this.Password.trim().length === 0){
     this.errorMsg ="Please enter Password";
  }else{
    this.errorMsg = "";
    let rj = this.auth.login(this.username,this.Password);
      if (rj === 200){
        this.router.navigate(['home'])
      }if( rj === 403){
        this.errorMsg = "Invalid Credentials";
      }
    
  }
  }
  
}
