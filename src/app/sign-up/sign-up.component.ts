import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User = new User();

emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
  }

  onFirstNameInput(value:string){
    this.user.FirstName = value;
  }
  onLastNameInput(value:string){
    this.user.LastName=value;
  }
  onEmailInput(value:string){
    this.user.Email=value;
  }
  onPasswordInput(value:string){
    this.user.Password=value;
  }
  onConfirmInput(value:string){
    this.user.ConfirmPassword=value;
  }
  error: any;
  OnSubmit() {
    this.userService.registerUser(this.user);
  }
}
//      ()=> this.router.navigate(['login']
