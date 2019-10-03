import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {LoginAuthService} from "../services/login-auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user: any = {};

  constructor(private userService : UserService, private authService : LoginAuthService) {
    this.authService.isLoggedIn();
  }
  ngOnInit() {
  }

  saveUser(user : any, userForm : any ){
    user.enabled = true;
    this.userService.saveUser(user).subscribe((response) => {
      if(response){
        console.log(response);
        userForm.reset();
      }
    }
    )
  }

}
