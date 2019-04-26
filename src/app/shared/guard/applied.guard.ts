import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,  } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router/';

@Injectable({
  providedIn: 'root'
})
export class AppliedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() { // TODO double check the below is true when a person has not applied
      if ( localStorage.getItem('role') === undefined || localStorage.getItem('role') === null) {
          return true;
      }
      this.router.navigate(['/signup/apply']);
      return false;
  }
}
