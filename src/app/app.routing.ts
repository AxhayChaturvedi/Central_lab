import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NgModule }      from '@angular/core';

const appRoutes: Routes = [
    { path: 'about', component: AboutComponent },
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
      // other imports here
    ],
  })
  export class AppRoutingModule { }