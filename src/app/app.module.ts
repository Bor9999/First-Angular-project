import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import { FootBarComponent } from './navigation/foot-bar/foot-bar.component';
import { ContactsComponent } from './content/contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg-2';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavBarComponent,
    FootBarComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule
  ],
  providers: [],
  bootstrap: [AppComponent] //AppComponent
})
export class AppModule { }
