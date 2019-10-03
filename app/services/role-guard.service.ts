import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LoginAuthService} from "./login-auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  public currentstatus : any;

  constructor(private router: Router, private authService : LoginAuthService) {
    this.currentstatus = this.authService.getStatus().subscribe(currentstatus =>
    {
      this.currentstatus = currentstatus;
    })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.currentstatus.admin) {
      return true;
    }
    this.router.navigate(['/userdashboard']);
    return false;
  }

}
