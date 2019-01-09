import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {Skill} from './skill.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  readonly rootUrl='http://localhost:49848';
  header: HttpHeaders;

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Authorization':'bearer '+ 
      JSON.parse(localStorage.getItem('currentUser')).userToken});
  }
    getAllSkills() : Observable<Skill[]>{
      return this.http.get<Skill[]>(this.rootUrl+'/api/skills', {headers:this.header});    
   }
   getSkillsCategories() : Observable<string[]>{     
     return this.http.get<string[]>(this.rootUrl+"/api/skills/categories", {headers:this.header})
   }
   getSkillsByCategory(category:string) : Observable<Skill[]>{
     return this.http.get<Skill[]>(this.rootUrl+"/api/skills?category="+category,{headers:this.header});
   }
}
