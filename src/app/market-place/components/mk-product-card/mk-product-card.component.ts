import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mk-product-card',
  templateUrl: './mk-product-card.component.html',
  styleUrls: ['./mk-product-card.component.scss'],
})
export class MkProductCardComponent implements OnInit {
  @Input() nombre = '';
  @Input() descripcion = '';
  @Input() precio = '';
  @Input() categoria = '';
  @Input() imagen = '';
  @Output() clickCart = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onClickCart() {
    this.clickCart.emit();
  }
}
