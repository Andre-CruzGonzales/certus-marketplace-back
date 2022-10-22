import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product.module';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss'],
})
export class PageProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.get().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
  onClickViewProduct(id: number) {
    this.router.navigate([`/products/${id}`]);
  }
}
