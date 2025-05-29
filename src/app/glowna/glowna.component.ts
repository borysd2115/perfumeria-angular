import { Component} from '@angular/core';
import { PerfumyService } from '../services/perfumy.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-glowna',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './glowna.component.html',
  styleUrl: './glowna.component.css'
})
export class GlownaComponent {
  nowosci: any[] = [];

  constructor(private perfumyService: PerfumyService) {
    this.nowosci = this.perfumyService.getPerfumy().slice(0, 4);
  }

  getStars(rating: number): string {
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  }
}
