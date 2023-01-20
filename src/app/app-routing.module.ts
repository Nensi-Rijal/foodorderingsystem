import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/Cart/Cart.component';
import { DetailsComponent } from './components/Details/Details.component';
import { HomeComponent } from './components/Home/Home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'checkout/:id',component:CartComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
