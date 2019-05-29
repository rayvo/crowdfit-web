import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { HPopUUPPComponent } from './header-pop-uupp.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    name: string;

    constructor(
        private translate: TranslateService,
        public router: Router,
        private dialog: MatDialog
    ) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
        this.name = localStorage.getItem('fullname');
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.clear();
        this.router.navigate(['/login']);
        location.reload();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    getLS(key) {
        return localStorage.getItem(key);
    }

    toUserHome() {
        this.router.navigate(['/m/home']);
    }

    updateUserPP() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = false;
        dialogConfig.width = '400px';
        const dialogRef = this.dialog.open( HPopUUPPComponent, dialogConfig );

        dialogRef.afterClosed().subscribe(
          result => {
            console.log(result);
            if ( result !== '' ) {
              console.log(result);
            } // else canceled so do nothing
          },
          error => {
            console.log(error);
          }
        );
    }


}
