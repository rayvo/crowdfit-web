import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router/';

@Injectable({
  providedIn: 'root'
})
export class ResidentGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if ( localStorage.getItem('role') === '16'  ) {
      return true;
    }
    this.router.navigate(['/access-denied']);
    return false;
  }
}
