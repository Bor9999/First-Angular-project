import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TrafficStop1055Service implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userToken = 'dont forget password';
    const modifiedReq = req.clone({
      headers: req.headers
        .set('Authorization', `Bearer ${userToken}`)
        .set('custom-study-token', 'perfect future is waiting for us'),
    });
    return next.handle(modifiedReq);
  }
}
