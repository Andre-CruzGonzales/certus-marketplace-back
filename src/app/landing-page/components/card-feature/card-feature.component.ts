import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-feature',
  templateUrl: './card-feature.component.html',
  styleUrls: ['./card-feature.component.scss'],
})
export class CardFeatureComponent implements OnInit {
  @Input() icon = 'pi pi-heart';
  @Input() title = '';
  @Input() body = '';
  @Input() color = '';
  constructor() {}

  ngOnInit(): void {}
}
