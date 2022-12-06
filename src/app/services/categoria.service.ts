import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private apiUrl = `${environment.apiUrl}/categoria`;
  constructor(private http: HttpClient) {}
  create(data: any) {
    return this.http.post<any>(`${this.apiUrl}/create`, data);
  }
  getAll() {
    return this.http.get<any>(`${this.apiUrl}/get`);
  }
  update(id: number | string | null, data: any) {
    return this.http.post<any>(`${this.apiUrl}/update/${id}`, data);
  }
  delete(id: number | string | null) {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }
  getId(id: any) {
    return this.http.get<any>(`${this.apiUrl}/get/${id}`);
  }
}
