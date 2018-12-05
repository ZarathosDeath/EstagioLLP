import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  result = '';
  showDashboard: boolean = false;
  
  constructor(private authService: AuthService, private http: HttpClient) { }

  
  ngOnInit(){
    //user dashboard authentication
    this.authService.ShowDashboardEmitter.subscribe(
      show => this.showDashboard = show
    );
  }

  removeLocalStorage(){
    this.authService.logOut();
  }

}
