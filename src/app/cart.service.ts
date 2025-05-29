import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  nazwa: string;
  cena: number;
  ilosc: number;
  obrazek: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  currentCartItems = this.cartItems.asObservable();

  addToCart(item: Omit<CartItem, 'ilosc'>) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.ilosc += 1;
    } else {
      currentItems.push({ ...item, ilosc: 1 });
    }

    this.cartItems.next([...currentItems]);
    this.saveToLocalStorage();
  }

  removeFromCart(id: number) {
    const currentItems = this.cartItems.value.filter(item => item.id !== id);
    this.cartItems.next(currentItems);
    this.saveToLocalStorage();
  }

  clearCart() {
    this.cartItems.next([]);
    this.saveToLocalStorage();
  }

  getTotal(): number {
    return this.cartItems.value.reduce((sum, item) => sum + (item.cena * item.ilosc), 0);
  }

  private saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems.value));
  }

  loadFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems.next(JSON.parse(savedCart));
    }
  }
}