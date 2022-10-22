import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product/product.module';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss'],
})
export class DetailProductComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    nombre: '',
    precio: 0,
    imagen: '',
    descripcion: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
