import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailService } from '../../service/user-detail.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router,
    private userDetailService: UserDetailService) { }

  logout() {
    localStorage.removeItem('loginFlag');
    this.router.navigate(['/login']);
  }
}
