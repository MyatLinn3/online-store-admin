import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string ='';
  password : string ='';
  errorMessage='Invalid Credential';
  invalidLogin:boolean=false;
  constructor(
    private router:Router,
    private loginService:LoginService) { }

  ngOnInit() {
  }

  handleLogin() {
     if (this.loginService.authenticate(this.email,this.password)){
          this.invalidLogin=false;
         this.router.navigate(['/welcome']);
     }else {
        this.invalidLogin=true;
     }
  }
}
