import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-market-place-products',
  templateUrl: './market-place-products.component.html',
  styleUrls: ['./market-place-products.component.scss'],
})
export class MarketPlaceProductsComponent implements OnInit {
  @Input() products: any = [];
  @Output() clickCart = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClickCart(producto: any) {
    this.clickCart.emit(producto);
  }
}
