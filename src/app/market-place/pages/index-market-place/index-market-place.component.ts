import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-index-market-place',
  templateUrl: './index-market-place.component.html',
  styleUrls: ['./index-market-place.component.scss'],
})
export class IndexMarketPlaceComponent implements OnInit {
  products: any[] = [];
  constructor(
    private productoService: ProductsService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.productoService.getPublicados().subscribe({
      next: (result) => {
        console.log(result);
        this.products = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  onClickCart(producto: any) {
    this.addProducto(producto);
    this.getTotal();
  }
  addProducto(producto: any) {
    this.storeService.addProduct(producto);
  }
  getTotal() {
    this.storeService.getTotal();
  }
  getShoppingCart(): any {
    return this.getShoppingCart();
  }
}
