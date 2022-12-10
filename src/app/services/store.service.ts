import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: any[] = [];
  private myCart = new BehaviorSubject<any[]>([]);
  myCart$ = this.myCart.asObservable();
  private apiUrl = `${environment.apiUrl}/venta`;
  constructor(private http: HttpClient) {}
  addProduct(product: any) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }
  getShoppingCart() {
    return this.myShoppingCart;
  }
  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
  create(data: any) {
    return this.http.post<any>(`${this.apiUrl}/create`, data);
  }
}
