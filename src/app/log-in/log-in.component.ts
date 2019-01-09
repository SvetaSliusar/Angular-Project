import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private userService:UserService) { }
  ngOnInit() {
  }
  error: any;
  userName: string;
  password: string;

  onEmailInput(email: string){
    this.userName = email;
  }
  onPasswordInput(password: string){
    this.password = password;
  }

  OnSubmit(){    
    this.userService.userAuthentification(this.userName, this.password).subscribe((data:any)=>{      
      localStorage.setItem('currentUser',
      JSON.stringify({
        userName: this.userName,
        userToken:data.access_token
      })); 
      this.router.navigate(['skills']); 
      
    },error => {
      this.error = error.message; console.log(error);
    });
  }

}
