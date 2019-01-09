import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {User} from './user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl='http://localhost:49848';
  error:any;

  constructor(private http: HttpClient) {}
    registerUser(user : User){
      return this.http.post(this.rootUrl+'/api/Account/Register', user);    
   }
   userAuthentification(userName, password):Observable<Object>{
     var data = "UserName="+userName+"&Password="+password+"&grant_type=password";
     var requestHeader=new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
     return this.http.post(this.rootUrl+'/Token',data,{headers:requestHeader});
   }
}
