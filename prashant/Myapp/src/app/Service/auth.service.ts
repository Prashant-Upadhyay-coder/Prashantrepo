import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  private username: string = '';

  setUsername(username: string) {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }

  login(uname:string,pname:string){
    if(uname === "Prashant" && pname === "owner@123" ){
      return 200;
    }else{
      return 403;
    }

  }
  
}
