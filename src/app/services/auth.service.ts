import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Auth, Login } from '../models/product/auth.model';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private tokenService: TokenService) {}
  login(data: Login) {
    return this.http
      .post<Auth>(`${this.apiUrl}/login`, data)
      .pipe(tap((response) => this.tokenService.saveToken(response.token)));
  }
  profile() {
    //const headers = new HttpHeaders();
    //headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/profile`, {
      //headers,
    });
  }
  register(data: Login) {
    return this.http.post<Auth>(`${this.apiUrl}/register`, data);
  }
}
