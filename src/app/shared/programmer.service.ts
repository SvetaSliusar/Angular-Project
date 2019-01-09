import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Programmer } from './programmer.model';

@Injectable({
  providedIn: 'root'
})
export class ProgrammerService {

  readonly rootUrl='http://localhost:49848';
  header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Authorization':'bearer '+ 
      JSON.parse(localStorage.getItem('currentUser')).userToken});
  }

  addSkillRate(programmer:Programmer){
  return this.http.post(this.rootUrl+'/api/programmers/skills', programmer,{headers:this.header});
  }
}
