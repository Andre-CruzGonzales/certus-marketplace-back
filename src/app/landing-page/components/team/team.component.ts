import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  url = 'assets/images/';
  team: any[] = [
    {
      nombres: 'Andre Cruz Gonzales',
      rol: 'Desarrollador de software',
      image: this.url + 'andre_cruz.jpg',
    },
    {
      nombres: 'Alexander Edwin Oxa Ninataype',
      rol: 'Desarrollador de software',
      image: this.url + 'alex_oxa.jfif',
    },
    {
      nombres: 'José Carlos Rivero Mamani',
      rol: 'Desarrollador de software',
      image: this.url + 'jose_rivero.jfif',
    },
    {
      nombres: 'Alvaro Rubio',
      rol: 'Desarrollador de software',
      image: this.url + 'alvaro_rubio.jfif',
    },
    {
      nombres: 'Albamar Dariana Vivas Gonzalez',
      rol: 'Desarrollador de software',
      image: this.url + 'albamar_vivas.jpeg',
    },
    {
      nombres: 'Vaneza Zea Bardales',
      rol: 'Desarrollador de software',
      image: this.url + 'vaneza_zea.jpeg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
