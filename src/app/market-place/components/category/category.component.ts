import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoriaService: CategoriaService,
    private route: Router
  ) {}
  categories: any = [];
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.categoriaService.getAll().subscribe({
      next: (result) => {
        this.categories = result;
        console.log(result);
      },
    });
  }
  onClick(e: any) {
    console.log(e);
    this.route.navigate([`/mk/products/${e.id}`]);
  }
}
