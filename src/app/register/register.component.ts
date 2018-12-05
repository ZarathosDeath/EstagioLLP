import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../login/user';
import 'rxjs/Rx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  user: User = new User();

  onSubmit(form){
    console.log(this.user);

      this.http.post('https://testeestagio.llpdigital.com.br/api/auth/register', this.user)
      .subscribe(
        data => console.log(data)
      );
  }

  ngOnInit() {
    
  }

}
