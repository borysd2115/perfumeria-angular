import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { GlownaComponent } from './glowna/glowna.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { NowosciComponent } from './nowosci/nowosci.component';
import { PerfumyMeskieComponent } from './perfumy-meskie/perfumy-meskie.component';
import { PerfumyDamskieComponent } from './perfumy-damskie/perfumy-damskie.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,GlownaComponent,KoszykComponent,NowosciComponent,PerfumyMeskieComponent,PerfumyDamskieComponent],
  templateUrl: './app.component.html',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perfumeria';
}
