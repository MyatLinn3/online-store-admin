import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {


  constructor(
    private router:Router,
    private authentication:LoginService) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
    if (this.authentication.isUserloggedIn())
      return true;

    this.router.navigate(['/login'])

    return false;
  }

}
