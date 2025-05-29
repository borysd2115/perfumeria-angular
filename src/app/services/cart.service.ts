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
  public cartItems = new BehaviorSubject<CartItem[]>([]);
  currentCartItems = this.cartItems.asObservable();
  private discountCode = '';
  private discountPercentage = 0;

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


  public saveToLocalStorage() {
    if (typeof localStorage !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(this.cartItems.value));
  }
  }

  loadFromLocalStorage() {
    if (typeof localStorage !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems.next(JSON.parse(savedCart));
    }
  }
  }
  applyDiscount(code: string): boolean {
    if (code.toUpperCase() === 'SALE30') {
      this.discountCode = code;
      this.discountPercentage = 30;
      this.saveToLocalStorage();
      return true;
    }
    return false;
  }

  removeDiscount() {
    this.discountCode = '';
    this.discountPercentage = 0;
    this.saveToLocalStorage();
  }

  getDiscountAmount(): number {
    return this.getSubtotal() * (this.discountPercentage / 100);
  }

  getSubtotal(): number {
    return this.cartItems.value.reduce((sum, item) => sum + (item.cena * item.ilosc), 0);
  }

  getTotal(): number {
    const subtotal = this.getSubtotal();
    return subtotal - this.getDiscountAmount();
  }

  hasDiscount(): boolean {
    return this.discountPercentage > 0;
  }

  getDiscountInfo(): { code: string, percentage: number } {
    return { code: this.discountCode, percentage: this.discountPercentage };
  }
}