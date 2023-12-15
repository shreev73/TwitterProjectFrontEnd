import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {NgxTwitterTimelineModule} from 'ngx-twitter-timeline'



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfilepageComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    NgxTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
