import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/Cart/Cart.component';
import { DetailsComponent } from './components/Details/Details.component';
import { HomeComponent } from './components/Home/Home.component'; 

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    DetailsComponent, 
    CartComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
