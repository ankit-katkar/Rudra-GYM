import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'our-services', component:OurServicesComponent},
    {path:'our-team', component:OurTeamComponent},
    {path:'products', component:ProductsComponent},
    {path:'contact-us', component:ContactUsComponent},
];
