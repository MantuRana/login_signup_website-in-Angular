import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'login',
  pathMatch:'full'
},
{
  path:'login',
  component: LoginComponent
},
{
  path:'dashboard',
  component: HomeComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
