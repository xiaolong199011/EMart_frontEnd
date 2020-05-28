import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
//import {UserService} from '../services/user.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('token');
    console.log('token:' + token);
    if (token) {
      request = request.clone({
        setHeaders: {
          token: token
          //Authorization
        }
      });
    }

    return next.handle(request);
  }
}
