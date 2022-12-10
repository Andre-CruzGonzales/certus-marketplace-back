import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-buy-car',
  templateUrl: './list-buy-car.component.html',
  styleUrls: ['./list-buy-car.component.scss'],
})
export class ListBuyCarComponent implements OnInit {
  @Input() total = 0;
  @Input() cartProducts: any[] = [];
  constructor(private route: Router) {}

  ngOnInit(): void {}
  onClickForm() {
    this.route.navigate(['mk/form-order']);
  }
}
