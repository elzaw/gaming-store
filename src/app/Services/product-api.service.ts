import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductAPIService {
  // private apiUrl = 'http://localhost:3000/products';
  private apiUrl = `${environment.baseURL}/products`;
  httpHeader = {};
  constructor(private http: HttpClient) {
    this.httpHeader = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  getProductsByCategoryID(catId: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiUrl}?CategoryId=${catId}`);
  }

  getProductByID(pId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiUrl}/${pId}`);
  }

  deleteProduct(pId: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.apiUrl}/${pId}`);
  }

  updateProduct(pId: number, product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(
      `${this.apiUrl}/${pId}`,
      JSON.stringify(product)
    );
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      this.apiUrl,
      JSON.stringify(product),
      this.httpHeader
    );
  }
}
