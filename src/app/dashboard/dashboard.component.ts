import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.http.get("https://testeestagio.llpdigital.com.br/api/auth/llp")
    .subscribe(
      data => console.log(data)
    )
  }

}
