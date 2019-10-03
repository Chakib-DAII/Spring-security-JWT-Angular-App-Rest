import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from "../services/auth-guard.service";
import {LoginAuthService} from "../services/login-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentstatus : any;

  constructor(private authService : LoginAuthService, private router : Router) {
    this.currentstatus = this.authService.getStatus().subscribe(currentstatus =>
    {
      this.currentstatus = currentstatus;
    })
  }

  ngOnInit() {
  }

  logout(){

    localStorage.removeItem('currentUser');
    this.router.navigate(['/login'])
  }

}
