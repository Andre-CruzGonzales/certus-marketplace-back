import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product.module';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-page-detail-product',
  templateUrl: './page-detail-product.component.html',
  styleUrls: ['./page-detail-product.component.scss'],
})
export class PageDetailProductComponent implements OnInit {
  productId: string | null = null;
  product: Product = {
    id: 0,
    nombre: '',
    precio: 0,
    imagen: '',
    descripcion: '',
  };

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      if (this.productId) {
        this.productService.getId(this.productId).subscribe((data) => {
          console.log(data);
          this.product = data;
        });
      }
    });
  }
}
