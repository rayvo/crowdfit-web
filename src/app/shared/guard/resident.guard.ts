import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router/';

@Injectable({
  providedIn: 'root'
})
export class ResidentGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if ( localStorage.getItem('isLoggedin') === null ) {
      this.router.navigate(['/login']);
      return false;
    } else if ( localStorage.getItem('roles') === '[]' ) {
      this.router.navigate(['/signup/apply'])
    }

    if ( localStorage.getItem('role') === '16'  ) {
      return true;
    }
    this.router.navigate(['/s/staff']);
    return false;
  }
}
