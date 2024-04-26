import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = new URL('https://api.escuelajs.co/api/v1/products');
  private http = inject(HttpClient);

  getProducts(category_id?: string) {
    if (category_id) {
      this.url.searchParams.set('categoryId', category_id as string);
    }else{
      this.url.searchParams.delete('categoryId');
    }
    return this.http.get<Product[]>(this.url.toString());
  }

  getOne(id: string) {
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }


}
