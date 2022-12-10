import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-navbar-market-place',
  templateUrl: './navbar-market-place.component.html',
  styleUrls: ['./navbar-market-place.component.scss'],
})
export class NavbarMarketPlaceComponent implements OnInit {
  cartProducts: any;
  counter = 0;
  total = 0;
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
      this.cartProducts = products;
      this.total = products.reduce((sum, item) => sum + item.precio, 0);
    });
  }
}
