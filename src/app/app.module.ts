import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddComponent } from './midd/midd.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, RouterModule ],
  declarations: [ AppComponent, HeaderComponent, MiddComponent, FooterComponent, AboutComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
