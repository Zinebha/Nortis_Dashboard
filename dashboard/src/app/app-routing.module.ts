import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { TopComponent } from './top/top.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  //{path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path: 'top',component: TopComponent},
  {path: 'sidebar', component: SidenavComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
