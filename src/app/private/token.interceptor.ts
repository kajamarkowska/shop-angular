import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthState } from '../public/state/auth.state';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

 constructor(public store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.store.selectSnapshot(AuthState.token)
    if(token){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(request);
  }
}
