import { ArrayType } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtformComponent } from './pages/artform/artform.component';

import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';




const routes: Routes = [
  {
    path:'',component:HomepageComponent
  },
  {
    path:'contact',component:ContactpageComponent
  },

{
path:'login',component:LoginpageComponent
},
{
  path:'signup',component:SignuppageComponent
},
{
  path:'signin',component:SigninComponent
},

{
  path:'artform',component:ArtformComponent
},


{
  path:'singlepage',component:SinglepageComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
