import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  authenticate(email,password){
    console.log(email,password)
    if (email=="admin@gmail.com" && password=="admin"){
      sessionStorage.setItem('authenticateUser',email);
      return true;
    }else {
      return false;
    }
  }

  isUserloggedIn(){
    let user =sessionStorage.getItem('authenticateUser');
    return !(user===null);
  }

  logout(){
    return sessionStorage.removeItem('authenticateUser')
  }
}
