import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   cartItemCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.currentCartItems.subscribe(items => {
      this.cartItemCount = items.reduce((sum, item) => sum + item.ilosc, 0);
    });
  }
}
