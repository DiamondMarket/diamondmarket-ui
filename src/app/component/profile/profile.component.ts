import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../../service/user-detail.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userDetailService: UserDetailService) { }

  ngOnInit() {
  }

}
