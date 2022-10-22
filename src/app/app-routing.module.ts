import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageProductsComponent } from './pages/page-products/page-products.component';
import { PageDetailProductComponent } from './pages/page-detail-product/page-detail-product.component';
const routes: Routes = [
  {
    path: '',
    component: PageLoginComponent,
  },
  { path: 'register', component: PageRegisterComponent },
  { path: 'products', component: PageProductsComponent },
  { path: 'products/:id', component: PageDetailProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
