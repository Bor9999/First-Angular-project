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
import { SinglePostComponent } from './content/blog/single-post/single-post.component';
import { MatIconModule } from '@angular/material/icon';
import { IconService } from './services/icon.service';
import { MatCardModule} from '@angular/material/card';
import { ToGrayDirective } from './custom-directives/to-gray.directive';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './content/charts/chart/chart.component';
import { ChartsContainerComponent } from './content/charts/charts-container/charts-container.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavBarComponent,
    FootBarComponent,
    ContactsComponent,
    SinglePostComponent,
    ToGrayDirective,
    ChartComponent,
    ChartsContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [IconService],
  bootstrap: [AppComponent] //AppComponent
})
export class AppModule { }
