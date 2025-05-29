import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfumydamskieService } from '../services/perfumydamskie.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-szczegoly-damskie',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './szczegoly-damskie.component.html',
  styleUrls: ['./szczegoly-damskie.component.css']
})
export class SzczegolyDamskieComponent implements OnInit {
  perfum: any;

  constructor(
    private route: ActivatedRoute,
    private perfumyDamskieService: PerfumydamskieService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.perfum = this.perfumyDamskieService.getPerfumById(id);
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
