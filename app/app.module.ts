import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthGuardService} from "./services/auth-guard.service";
import {RoleGuardService} from "./services/role-guard.service";

const appRoutes: Routes = [
  {path : 'signup' , component : SignupComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'userdashboard' , component : UserdashboardComponent, canActivate: [AuthGuardService]},
  {path : 'admindashboard' , component : AdmindashboardComponent, canActivate: [RoleGuardService]},
  {path : '' , redirectTo : 'home' , pathMatch : 'full'},
  {path : '**' , redirectTo : 'home'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
