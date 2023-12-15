import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//import { ProfilepageComponent } from './profilepage/profilepage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  //{
   // path:"progilepage",
   // component:ProfilepageComponent
 // },
  
  {
    path:"home",
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
