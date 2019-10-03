import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from "../services/login-auth.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {

  public loginUser : any = {};
  public users : any = {};

  constructor(private authService : LoginAuthService, private userService : UserService) {
    this.authService.isLoggedIn();
    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
    this.userService.getAllUsers(this.loginUser.token).subscribe(users => {
      this.users = users;
    }, err =>{
      console.log(err)
    })
  }

}
