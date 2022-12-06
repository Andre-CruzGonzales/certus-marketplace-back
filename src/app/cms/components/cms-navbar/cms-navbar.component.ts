import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-cms-navbar',
  templateUrl: './cms-navbar.component.html',
  styleUrls: ['./cms-navbar.component.scss'],
})
export class CmsNavbarComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Productos',

      command: (event) => {
        this.route.navigate(['/cms/products']);
      },
    },
    {
      label: 'Categorias',

      command: (event) => {
        console.log(event);
        this.route.navigate(['/cms/category']);
      },
    },
  ];
  constructor(private route: Router) {}

  ngOnInit(): void {}
}
