import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewwallairlineComponent } from './viewwallairline/viewwallairline.component';
import { ViewallpassengersComponent } from './viewallpassengers/viewallpassengers.component';

const appRoutes:Routes=[
  {
    path:"",component:ViewwallairlineComponent
  },
  {
    path:"viewallpassengers",component:ViewallpassengersComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewwallairlineComponent,
    ViewallpassengersComponent
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
