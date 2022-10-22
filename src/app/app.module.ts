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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    DialogModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
