import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfumyService } from '../services/perfumy.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-szczegoly-p',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './szczegoly-p.component.html',
  styleUrls: ['./szczegoly-p.component.css']
})
export class SzczegolyPComponent implements OnInit {
  perfum: any;

  constructor(
    private route: ActivatedRoute,
    private perfumyService: PerfumyService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.perfum = this.perfumyService.getPerfumById(id);
  }
  getStars(rating: number): string {
  return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
}
  addToCart() {
    if (this.perfum) {
      this.cartService.addToCart({
        id: this.perfum.id,
        nazwa: this.perfum.nazwa,
        cena: this.perfum.cena,
        obrazek: this.perfum.obrazek
      });
    }
  }
}