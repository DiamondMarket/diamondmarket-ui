import { Component, OnInit } from '@angular/core';
import { User } from '../../domain/user';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login-service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { UserDetailService } from '../../service/user-detail.service';

@Component({
  selector: 'diamond-market-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = new User();
  message: string;


  constructor(private loginService: LoginService,
    private userDetailService: UserDetailService,
    private socialAuthService: AuthService,
    private router: Router
  ) { }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider)
      .then((userData) => {
        console.log(socialPlatform + " sign in data : ", userData);
        this.storeUserDetails(userData);
        localStorage.setItem('loginFlag', '' + true);
        this.router.navigate(['/home']);
      });
  }

  storeUserDetails(userData: any) {
    this.user.email = userData.email;
    this.user.userName = userData.name;
    this.user.image = userData.image;
    this.user.provider = userData.provider;
    localStorage.setItem('user', JSON.stringify(this.user));

  }

}

