import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product/product.module';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Product[]>(`${this.apiUrl}/products/get`);
  }
  getId(id: string | null) {
    return this.http.get<Product>(`${this.apiUrl}/products/get/${id}`);
  }
}
