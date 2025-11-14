import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Product {
  sku: string;
  name: string;
  manufacturer: string | null;
  finalPriceHuf: number;
  stock: number | null;
  ean: string | null;
  updatedAt: string;
  source: string;
  valid: boolean;
  validationErrors: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly baseUrl = `${environment.apiBaseUrl}/products`;

  constructor(private http: HttpClient) {}

  getProducts(filter?: string, sort?: string, onlyValid: boolean = true): Observable<Product[]> {
    let params = new HttpParams().set('onlyValid', onlyValid);

    if (filter) {
      params = params.set('filter', filter);
    }
    if (sort) {
      params = params.set('sort', sort);
    }

    return this.http.get<Product[]>(this.baseUrl, { params });
  }
}
