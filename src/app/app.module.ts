import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewwallairlineComponent } from './viewwallairline/viewwallairline.component';

const appRoutes:Routes=[
  {
    path:"",component:ViewwallairlineComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewwallairlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
