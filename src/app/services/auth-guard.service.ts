import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { RouterStateSnapshot } from '@angular/router/src/router_state';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router, 
    private authService: AuthService) { }

  canActivate(route, state: RouterStateSnapshot) {
    if(this.authService.isLoggedIn()) 
      return true; 
      else {
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
  }

}
