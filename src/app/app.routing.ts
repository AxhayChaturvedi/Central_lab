import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './Contact/Contact.component';



const appRoutes: Routes = [
    
    //Site routes goes here 
    { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
          { path: 'home', component: HomeComponent, pathMatch: 'full'},
          { path: 'about', component: AboutComponent },
          
        ]
    },
    
    // App routes goes here here
    { 
        path: '',
        component: AppLayoutComponent, 
        children: [
          { path: 'Contact', component: ContactComponent }
          
        ]
    },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


