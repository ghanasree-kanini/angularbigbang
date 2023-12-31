import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DasboardComponent } from './dasboard/dasboard.component';

const routes: Routes = [

  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
