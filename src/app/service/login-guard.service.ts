import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "./login-service";
import { UserDetailService } from "./user-detail.service";

@Injectable()
export class LoginGuardService implements CanActivate {

    constructor(public userDetailService: UserDetailService, public router: Router) { }

    canActivate(): boolean {
        this.userDetailService.loginFlag = new Boolean(localStorage.getItem('loginFlag')).valueOf();
        if (this.userDetailService.loginFlag) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}