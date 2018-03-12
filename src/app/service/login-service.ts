import { User } from "../domain/user";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserDetailService } from "./user-detail.service";

@Injectable()
export class LoginService {

    constructor(private http: Http,private router:Router,private userDetailService :UserDetailService) { }

    public getUserDetails(user) {
        // const url = 'http://localhost:9090/dango/mobile-comparison/loginApi';
        // return this.http.post(url, user);
    }
    public logout(){
        localStorage.removeItem('loginFlag');
        this.userDetailService.loginFlag=false;
        this.router.navigate(['/login']);
    }

}