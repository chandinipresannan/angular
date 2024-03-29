import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ArtformComponent } from './pages/artform/artform.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';







@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    SignuppageComponent,
    ContactpageComponent,
    NavbarComponent,
    FooterComponent,
    SigninComponent,
    ArtformComponent,
    SinglepageComponent,
    
    
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
