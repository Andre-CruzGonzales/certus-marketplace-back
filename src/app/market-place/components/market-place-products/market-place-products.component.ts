import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-place-products',
  templateUrl: './market-place-products.component.html',
  styleUrls: ['./market-place-products.component.scss'],
})
export class MarketPlaceProductsComponent implements OnInit {
  @Input() products: any = [];
  constructor() {}

  ngOnInit(): void {}
}
