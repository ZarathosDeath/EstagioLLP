import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getStatus(){
    return this.http.get('https://testeestagio.llpdigital.com.br/api/status');
  }
}
