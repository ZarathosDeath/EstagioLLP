import { Injectable, Inject } from '@angular/core';
import { User } from './user' 
import { EventEmitter } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public data: any = [];
  private authenticatedUser: boolean = false;

  ShowDashboardEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,private http: HttpClient ,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  UserLogin(user: User){
    if (user.email === 'user@test.com' && user.password === '123456'){
      this.authenticatedUser = true;

      this.ShowDashboardEmitter.emit(true);

      return this.http.post<any>('https://testeestagio.llpdigital.com.br/api/auth/login', user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('loggedIn', res.token)
          this.router.navigate(['/dashboard']);
        }
      );
      
    } else{
      this.authenticatedUser = false;
      this.ShowDashboardEmitter.emit(false);
    }
  }

  isUserAuthenticated(){
    return localStorage.getItem('loggedIn');
  }

  logOut(){
    localStorage.removeItem('loggedIn');
  }

  getToken(){
    return JSON.parse(localStorage.getItem('LoggedIn'));
  }

  
}

