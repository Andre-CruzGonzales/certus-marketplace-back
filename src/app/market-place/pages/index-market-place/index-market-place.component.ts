import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-index-market-place',
  templateUrl: './index-market-place.component.html',
  styleUrls: ['./index-market-place.component.scss'],
})
export class IndexMarketPlaceComponent implements OnInit {
  products: any[] = [];
  constructor(private productoService: ProductsService) {}

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
}
