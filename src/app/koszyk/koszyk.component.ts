import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-koszyk',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent implements AfterViewInit {
  discountCode = '';
  discountApplied = false;
  discountError = false;
  showReceipt = false;
  orderDate: Date = new Date();
  private barcodeGenerated = false;

  @ViewChild('barcode', { static: false }) barcode!: ElementRef<SVGSVGElement>;


  constructor(public cartService: CartService) {
    this.cartService.loadFromLocalStorage();
    this.discountApplied = this.cartService.hasDiscount();
  }

  ngAfterViewInit() {}

  ngAfterViewChecked() {
    if (this.showReceipt && this.barcode && !this.barcodeGenerated) {
      this.generateBarcode();
      this.barcodeGenerated = true;
    }

    if (!this.showReceipt) {
      this.barcodeGenerated = false;
    }
  }

  generateBarcode() {
    try {
      JsBarcode(this.barcode.nativeElement, 'ORDER' + this.orderDate.getTime(), {
        format: 'CODE128',
        lineColor: '#000',
        width: 2,
        height: 50,
        displayValue: true
      });
    } catch (e) {
      console.error('Błąd generowania kodu kreskowego:', e);
    }
  }

  updateQuantity(item: any, change: number) {
    const newQuantity = item.ilosc + change;
    if (newQuantity > 0) {
      item.ilosc = newQuantity;
    } else {
      this.cartService.removeFromCart(item.id);
    }
    this.cartService.saveToLocalStorage();
  }

  applyDiscount() {
    if (this.cartService.applyDiscount(this.discountCode)) {
      this.discountApplied = true;
      this.discountError = false;
    } else {
      this.discountError = true;
    }
  }

  removeDiscount() {
    this.cartService.removeDiscount();
    this.discountApplied = false;
    this.discountCode = '';
  }

  placeOrder() {
    this.orderDate = new Date();
    this.showReceipt = true;
  }

  finishOrder() {
    this.cartService.clearCart();
    this.discountApplied = false;
    this.discountCode = '';
    this.showReceipt = false;
    alert('Dziękujemy za zakupy!');
  }
}