import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  private subject = new Subject<any>();
  public user : any = [];

  constructor() { }

  isLoggedIn(){
    if(localStorage.getItem('currentUser')){
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      if(this.user.user.role === 'ADMIN'){
        this.subject.next({status : true , admin : true} );
      }else {
        this.subject.next({status : true , admin : false} );
      }
    }else {
      this.subject.next({status : false});
    }
  }

  clearStatus(){
    this.subject.next();
  }

  getStatus() : Observable<any> {
    return this.subject.asObservable();
  }

}
