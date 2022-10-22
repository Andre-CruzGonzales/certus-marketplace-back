import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateUserDTO } from '../models/product/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}
  create(dto: CreateUserDTO) {
    return this.http.post(`${this.apiUrl}/register`, dto);
  }
}
