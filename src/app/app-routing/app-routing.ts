import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { LoginComponent } from '../component/login/login.component';
import { LoginGuardService } from '../service/login-guard.service';
import { SignupComponent } from '../component/signup/signup.component';
import { HomeComponent } from '../component/home/home.component';
import { ProfileComponent } from '../component/profile/profile.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signup' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, canActivate: [LoginGuardService],
    children: [
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//  export const routingComponents = [FirstComponent, SecondComponent, ThirdComponent];