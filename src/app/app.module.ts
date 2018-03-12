import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { LoginService } from './service/login-service';
import { LoginGuardService } from './service/login-guard.service';
import { AppRoutingModule } from './app-routing/app-routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './component/signup/signup.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import { HomeComponent } from './component/home/home.component';
import { UserDetailService } from './service/user-detail.service';
import { ProfileComponent } from './component/profile/profile.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("333944667095343")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("706844816562-drhvtq9p0d19btitn1mvidnmpnknteu4.apps.googleusercontent.com")
      },
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [LoginService, LoginGuardService, UserDetailService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
