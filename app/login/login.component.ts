import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {LoginAuthService} from "../services/login-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: any = {};

  constructor(private userService : UserService, private router : Router, private authService : LoginAuthService) {
    this.authService.isLoggedIn();
  }

  ngOnInit() {
  }

  loginUser(user : any){
    this.userService.loginUser(user).subscribe((response) => {
        if(response){
          //console.log(response);
          if(response.token){
            localStorage.setItem('currentUser', JSON.stringify(response));
          }
          if(response.user.role === 'ADMIN'){
            this.router.navigate(['/admindashboard']);
          }else{
            this.router.navigate(['/userdashboard']);
          }
        }
      });
  }
}
