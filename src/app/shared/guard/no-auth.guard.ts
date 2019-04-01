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

    // TODO Reroute when other pages are made
    this.router.navigate(['/menu']);
    return false;
  }
}
