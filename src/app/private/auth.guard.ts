import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthState } from '../public/state/auth.state';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(public store: Store, public router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.store.selectSnapshot(AuthState.currentUser);
    console.log(currentUser)
    if (currentUser) {
      return true;
    }
    this.router.navigate(['/login'])
    return false;
  }

}
