import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule,} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/components/login/login.component';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main/components/main/main-page.component';
import {AppRoutingModule} from './app.routing';
import {ErrorPageComponent} from './error/components/error-page/error-page.component';
import {LoginModule} from './login/login.module';
import {MainModule} from './main/main.module';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ErrorModule} from './error/error.module';
import {MaterialUIModule} from './material-ui.module';
import {MenuItemComponent} from './main/components/menu-item/menu-item.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialUIModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LoginModule,
    MainModule,
    ErrorModule,
    PdfViewerModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, LoginComponent, MainPageComponent, ErrorPageComponent, MenuItemComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
