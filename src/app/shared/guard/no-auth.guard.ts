import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('isLoggedin') == null) {
      return true;
    }
    if ( localStorage.getItem('role') === '16' ) {
      this.router.navigate(['/m/home']);
      return false;
    } else {
      this.router.navigate(['/s/menu']);
      return false;
    }
  }
}
