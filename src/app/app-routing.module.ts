import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageProductsComponent } from './pages/page-products/page-products.component';
import { PageDetailProductComponent } from './pages/page-detail-product/page-detail-product.component';
import { IndexLandingPageComponent } from './landing-page/pages/index-landing-page/index-landing-page.component';
import { CmsProductosComponent } from './cms/pages/cms-productos/cms-productos.component';
import { CmsCategoryComponent } from './cms/pages/cms-category/cms-category.component';
import { IndexMarketPlaceComponent } from './market-place/pages/index-market-place/index-market-place.component';
import { CategoryMarketPlaceComponent } from './market-place/pages/category-market-place/category-market-place.component';
const routes: Routes = [
  { path: '', component: IndexLandingPageComponent },
  {
    path: 'login',
    component: PageLoginComponent,
  },
  { path: 'register', component: PageRegisterComponent },

  { path: 'cms/products', component: CmsProductosComponent },
  { path: 'cms/category', component: CmsCategoryComponent },
  { path: 'mk/products', component: IndexMarketPlaceComponent },
  { path: 'mk/products/:idCategoria', component: CategoryMarketPlaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
