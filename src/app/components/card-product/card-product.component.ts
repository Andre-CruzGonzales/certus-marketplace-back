import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product/product.module';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {
  @Output() viewProduct = new EventEmitter();
  @Input() product: Product = {
    id: 0,
    nombre: '',
    precio: 0,
    imagen: '',
    descripcion: '',
  };
  constructor() {}

  ngOnInit(): void {}
  toggleViewProducto() {
    this.viewProduct.emit(this.product.id);
  }
}
