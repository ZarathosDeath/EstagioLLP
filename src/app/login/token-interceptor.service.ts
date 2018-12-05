import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { AuthService } from './auth.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private AuthService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.AuthService.getToken()}`
      }
    });
    console.log (tokenizedReq)

    return next.handle(tokenizedReq);
  }
}
