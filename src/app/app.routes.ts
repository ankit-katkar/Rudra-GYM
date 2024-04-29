import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminUpdateProductComponent } from './admin-update-product/admin-update-product.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'product-detail/:_id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },

  // admin
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'admin-add-product', component: AdminAddProductComponent },
  { path: 'admin-update-product/:_id', component: AdminUpdateProductComponent },
];
