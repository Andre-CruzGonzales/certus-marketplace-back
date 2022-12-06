import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category-market-place',
  templateUrl: './category-market-place.component.html',
  styleUrls: ['./category-market-place.component.scss'],
})
export class CategoryMarketPlaceComponent implements OnInit {
  constructor(
    private param: ActivatedRoute,
    private categoriaService: CategoriaService
  ) {}
  categoriaId: any;
  products: any = [];
  ngOnInit(): void {
    this.getParamId();
  }
  getParamId() {
    this.param.paramMap.subscribe((params) => {
      this.categoriaId = params.get('idCategoria');
      console.log(this.categoriaId);
      if (this.categoriaId) {
        this.getAll(this.categoriaId);
      }
    });
  }
  getAll(id: any) {
    this.categoriaService.getId(id).subscribe({
      next: (result: any) => {
        console.log('ddd', result);
        this.products = result.productos;
      },
    });
  }
}
