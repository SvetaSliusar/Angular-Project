import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {UserService} from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';
import { ChooseSkillsComponent } from './choose-skills/choose-skills.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { SkillService } from './shared/skill.service';
import { AuthGuard } from './auth/auth.guard';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const appRoutes: Routes =[
  { path:'', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
  {path:'skills', component: ChooseSkillsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    ChooseSkillsComponent,
    StarRatingComponent,
    ManageUsersComponent 
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, SkillService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
