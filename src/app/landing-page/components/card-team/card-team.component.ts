import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss'],
})
export class CardTeamComponent implements OnInit {
  @Input() nombres = '';
  @Input() rol = '';
  @Input() image = '';
  constructor() {}

  ngOnInit(): void {}
}
