import { Component, OnInit } from '@angular/core';
import { User } from './user' 
import { AuthService } from './auth.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router,private authService: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.authService.logOut();
  }

  UserLogin(){
    console.log(this.user);
    this.authService.UserLogin(this.user);
  }

  removeLocalStorage(){
    this.authService.logOut();
    this.router.navigate(['/']);
  }
}