import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfumy-meskie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './perfumy-meskie.component.html',
  styleUrl: './perfumy-meskie.component.css'
})
export class PerfumyMeskieComponent {
  perfumy = [
    {
      id: 1,
      nazwa: 'Dior Sauvage',
      cena: 399,
      ocena: 4.5,
      obrazek: 'assets/dior-sauvage.jpg',
      opis: 'Ikoniczny zapach męski z nutami cytrusów i pieprzu',
      nutyZapachowe: 'Bergamotka, Pieprz, Wanilia',
      pojemnosc: '100 ml',
      rodzaj: 'Eau de Toilette'
    },
    {
    id: 2,
    nazwa: 'Chanel Bleu de Chanel',
    cena: 450,
    ocena: 4.7,
    obrazek: 'assets/bleu-de-chanel.jpg',
    opis: 'Elegancki i uwodzicielski zapach dla nowoczesnego mężczyzny',
    nutyZapachowe: 'Cedr, Imbir, Paczula',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Parfum'
  },
  {
    id: 3,
    nazwa: 'Jean Paul Gaultier Le Male',
    cena: 320,
    ocena: 4.3,
    obrazek: 'assets/le-male.jpg',
    opis: 'Kultowy zapach o zmysłowej, orientalnej kompozycji',
    nutyZapachowe: 'Lawenda, Wanilia, Anyż',
    pojemnosc: '125 ml',
    rodzaj: 'Eau de Toilette'
  },
  {
    id: 4,
    nazwa: 'Versace Eros',
    cena: 350,
    ocena: 4.4,
    obrazek: 'assets/versace-eros.jpg',
    opis: 'Mocny, świeży i uwodzicielski aromat',
    nutyZapachowe: 'Mięta, Zielone jabłko, Tonka',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Parfum'
  },
  {
    id: 5,
    nazwa: 'Paco Rabanne 1 Million',
    cena: 380,
    ocena: 4.2,
    obrazek: 'assets/1-million.jpg',
    opis: 'Luksusowy zapach o bursztynowo-skórzanej kompozycji',
    nutyZapachowe: 'Różowy pieprz, Mięta, Bursztyn',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Toilette'
  },
  {
    id: 6,
    nazwa: 'Armani Acqua di Giò',
    cena: 420,
    ocena: 4.6,
    obrazek: 'assets/acqua-di-gio.jpg',
    opis: 'Świeży morski zapach inspirowany wyspą Pantelleria',
    nutyZapachowe: 'Cytrusy, Morska nuta, Drzewo sandałowe',
    pojemnosc: '125 ml',
    rodzaj: 'Eau de Toilette'
  },
  {
    id: 7,
    nazwa: 'Tom Ford Noir Extreme',
    cena: 650,
    ocena: 4.8,
    obrazek: 'assets/noir-extreme.jpg',
    opis: 'Luksusowy orientalno-korzennny zapach',
    nutyZapachowe: 'Mandarynka, Neroli, Orzech laskowy',
    pojemnosc: '50 ml',
    rodzaj: 'Eau de Parfum'
  },
  {
    id: 8,
    nazwa: 'Creed Aventus',
    cena: 1200,
    ocena: 4.9,
    obrazek: 'assets/creed-aventus.jpg',
    opis: 'Ekskluzywny zapach inspirowany życiem Napoleona',
    nutyZapachowe: 'Ananas, Brzoskwinia, Brzoza',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Parfum'
  },
  {
    id: 9,
    nazwa: 'Dolce & Gabbana The One',
    cena: 360,
    ocena: 4.3,
    obrazek: 'assets/the-one.jpg',
    opis: 'Elegancki i zmysłowy zapach o orientalnym charakterze',
    nutyZapachowe: 'Bazylia, Kardamon, Bursztyn',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Parfum'
  }
  ];

  sortOption: string = 'domyslne';
  sortDirection: 'asc' | 'desc' = 'asc';

  get sortedPerfumy() {
    var sorted = [...this.perfumy];
    
    switch(this.sortOption) {
      case 'cena':
        sorted.sort((a, b) => this.sortDirection === 'asc' 
          ? a.cena - b.cena 
          : b.cena - a.cena);
        break;
      case 'ocena':
        sorted.sort((a, b) => this.sortDirection === 'asc' 
          ? a.ocena - b.ocena 
          : b.ocena - a.ocena);
        break;
      case 'nazwa':
        sorted.sort((a, b) => this.sortDirection === 'asc' 
          ? a.nazwa.localeCompare(b.nazwa) 
          : b.nazwa.localeCompare(a.nazwa));
        break;
    }
    
    return sorted;
  }

  changeSort(option: string) {
    if (this.sortOption === option) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      this.perfumy = this.sortedPerfumy;
    } else {
      this.sortOption = option;
      this.sortDirection = 'asc';
      this.perfumy = this.sortedPerfumy;
    }
  }

  getSortIcon(option: string): string {
    if (this.sortOption !== option) return '';
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }

  getSortLabel(): string {
  const labels: {[key: string]: string} = {
    'domyslne': 'Domyślne',
    'cena': 'Cena',
    'ocena': 'Ocena',
    'nazwa': 'Nazwa'
  };
  return `${labels[this.sortOption]} ${this.getSortIcon(this.sortOption)}`;
}

getStars(rating: number): string {
  return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
}
}
