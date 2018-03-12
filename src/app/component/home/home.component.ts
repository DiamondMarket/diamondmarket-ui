import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../../service/user-detail.service';
import { User } from '../../domain/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private userDetailService :UserDetailService) { }

  ngOnInit() {
     this.userDetailService.user = JSON.parse(localStorage.getItem('user'));

    
  }

}
