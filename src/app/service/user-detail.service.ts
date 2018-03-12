import { Injectable } from "@angular/core";
import { User } from "../domain/user";

@Injectable()
export class UserDetailService {
    loginFlag:boolean=false;
    user: User;
    
}