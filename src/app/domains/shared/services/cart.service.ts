import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService { 

  cart = signal<Product[]>([]);
  total = computed(() => { //computed señal que se calcula a partir de otras
    const cart = this.cart(); 
    return cart.reduce((total, product) => total + product.price, 0);
  })

  constructor() { } 


  addToCart(product: Product){
    this.cart.update(state => [...state, product]);
    
  }
}
