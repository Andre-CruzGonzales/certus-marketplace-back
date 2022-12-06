import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product/product.module';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = `${environment.apiUrl}/products`;
  constructor(private http: HttpClient) {}
  get() {
    return this.http.get<Product[]>(`${this.apiUrl}/get`);
  }
  getId(id: string | null) {
    return this.http.get<Product>(`${this.apiUrl}/get/${id}`);
  }
  create(data: any) {
    return this.http.post<any>(`${this.apiUrl}/create`, data);
  }
  update(id: any, data: any) {
    return this.http.post<any>(`${this.apiUrl}/update/${id}`, data);
  }
  delete(id: any, data: any) {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`, data);
  }
  publicar(id: any, data: any) {
    return this.http.put<any>(`${this.apiUrl}/publicar/${id}`, data);
  }
  getPublicados() {
    return this.http.get<Product[]>(`${this.apiUrl}/get_publicados`);
  }
}
