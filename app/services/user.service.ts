import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {
    this.http = http;
  }

  saveUser(user : any): Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
    return this.http.post("http://localhost:9090/registration", user, {headers : headers})
  }

  loginUser(user : any): Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
    return this.http.post("http://localhost:9090/login", user, {headers : headers})
  }

  getAllUsers(token : any): Observable<any> {
    const headers = new HttpHeaders({'Authorization' : 'Bearer '+token});
    return this.http.get("http://localhost:9090/users",{headers : headers})
  }

  getUser(token : any): Observable<any> {
    const headers = new HttpHeaders({'Authorization' : 'Bearer '+token});
    return this.http.get("http://localhost:9090/getuser",{headers : headers})
  }
}
