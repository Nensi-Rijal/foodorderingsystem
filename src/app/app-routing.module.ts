import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/Details/Details.component';
import { HomeComponent } from './components/Home/Home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'details/:id',component:DetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
