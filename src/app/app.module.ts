import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
//fin
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { RegisterComponent } from './components/register/register.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { PageProductsComponent } from './pages/page-products/page-products.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { PageDetailProductComponent } from './pages/page-detail-product/page-detail-product.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HeroComponent } from './landing-page/components/hero/hero.component';
import { FeatureComponent } from './landing-page/components/feature/feature.component';
import { IndexLandingPageComponent } from './landing-page/pages/index-landing-page/index-landing-page.component';
import { CardFeatureComponent } from './landing-page/components/card-feature/card-feature.component';
import { CallActionComponent } from './landing-page/components/call-action/call-action.component';
import { TeamComponent } from './landing-page/components/team/team.component';
import { LandingPageNavbarComponent } from './landing-page/components/landing-page-navbar/landing-page-navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { CardTeamComponent } from './landing-page/components/card-team/card-team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './market-place/components/category/category.component';
import { IndexMarketPlaceComponent } from './market-place/pages/index-market-place/index-market-place.component';
import { CategoryCardComponent } from './market-place/components/category-card/category-card.component';
import { MarketPlaceProductsComponent } from './market-place/components/market-place-products/market-place-products.component';
import { CrudCategoryComponent } from './cms/components/crud-category/crud-category.component';
import { CrudProductsComponent } from './cms/components/crud-products/crud-products.component';
import { CmsProductosComponent } from './cms/pages/cms-productos/cms-productos.component';
import { CmsCategoryComponent } from './cms/pages/cms-category/cms-category.component';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { TagModule } from 'primeng/tag';
import { CategoryMarketPlaceComponent } from './market-place/pages/category-market-place/category-market-place.component';
import { MkProductCardComponent } from './market-place/components/mk-product-card/mk-product-card.component';
import { NavbarMarketPlaceComponent } from './market-place/components/navbar-market-place/navbar-market-place.component';
import { BadgeModule } from 'primeng/badge';

import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CmsNavbarComponent } from './cms/components/cms-navbar/cms-navbar.component';
import { ListBuyCarComponent } from './market-place/components/list-buy-car/list-buy-car.component';
import { ListBuyPriceComponent } from './list-buy-price/list-buy-price.component';
import { OrderFormComponent } from './market-place/components/order-form/order-form.component';
import { PageFormOrderComponent } from './pages/page-form-order/page-form-order.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageLoginComponent,
    PageRegisterComponent,
    RegisterComponent,
    CardProductComponent,
    PageProductsComponent,
    DetailProductComponent,
    PageDetailProductComponent,
    HeroComponent,
    FeatureComponent,
    IndexLandingPageComponent,
    CardFeatureComponent,
    CallActionComponent,
    TeamComponent,
    LandingPageNavbarComponent,
    CardTeamComponent,
    CategoryComponent,
    IndexMarketPlaceComponent,
    CategoryCardComponent,
    MarketPlaceProductsComponent,
    CrudCategoryComponent,
    CrudProductsComponent,
    CmsProductosComponent,
    CmsCategoryComponent,
    CategoryMarketPlaceComponent,
    MkProductCardComponent,
    NavbarMarketPlaceComponent,
    CmsNavbarComponent,
    ListBuyCarComponent,
    ListBuyPriceComponent,
    OrderFormComponent,
    PageFormOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
    MenubarModule,
    ReactiveFormsModule,
    ToastModule,
    TableModule,
    ToolbarModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    FileUploadModule,
    ConfirmDialogModule,
    DropdownModule,
    InputNumberModule,
    TagModule,
    BadgeModule,
    OverlayPanelModule,
  ],
  providers: [
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
