import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router/';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {

    if (1) {// user.Role === next.data.role) {
      return true;
    }

    // navigate to not found page
    this.router.navigate(['/*']);
    return false;
  }
}
