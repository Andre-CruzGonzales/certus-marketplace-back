import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
  constructor() {}
  @Output() toggleClick = new EventEmitter();
  @Input() subtitle: string = '';
  @Input() title = '';
  @Input() image =
    'https://primefaces.org/primeblocks-ng/assets/images/blocks/ecommerce/categorypreview/category-preview-1-1.png';
  ngOnInit(): void {}
  onClick() {
    this.toggleClick.emit();
  }
}
