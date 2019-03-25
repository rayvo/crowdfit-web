import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { StoreProcuctRoutingModule } from './layout/store-management/store-product-management/store-procuct-routing.module';
>>>>>>> 6a2e974dff9132706f1d99665e38dbb8fcadc80c

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        StoreProcuctRoutingModule,
    ],
<<<<<<< HEAD
    declarations: [AppComponent, ],
=======
    declarations: [AppComponent],
>>>>>>> 6a2e974dff9132706f1d99665e38dbb8fcadc80c
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
