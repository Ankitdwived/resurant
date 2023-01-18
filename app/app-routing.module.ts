import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RsturantDashComponent } from './rsturant-dash/rsturant-dash.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path:'',redirectTo:'app',pathMatch:'full'
  },

  {
    path:'login',component:LoginComponent
  },

  {
    path:"signup",component:SignupComponent
  },

  {
    path:"resturant",component:RsturantDashComponent
  },
  {
    path:'list',component:ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
