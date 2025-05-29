import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfumy-damskie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './perfumy-damskie.component.html',
  styleUrl: './perfumy-damskie.component.css'
})
export class PerfumyDamskieComponent {
    perfumy = [
      {
    id: 11,
    nazwa: 'Chanel No. 5',
    cena: 520,
    ocena: 4.8,
    obrazek: 'assets/chanel-no5.jpg',
    opis: 'Klasyczny i ponadczasowy zapach dla eleganckich kobiet.',
    nutyZapachowe: 'Jaśmin, Róża, Aldehydy',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Parfum'
  },
  {
    id: 12,
    nazwa: 'Lancôme La Vie Est Belle',
    cena: 410,
    ocena: 4.7,
    obrazek: 'assets/lancome-la-vie-est-belle.jpg',
    opis: 'Słodki i zmysłowy zapach z nutami wanilii i irysa.',
    nutyZapachowe: 'Irys, Wanilia, Gruszka',
    pojemnosc: '75 ml',
    rodzaj: 'Eau de Parfum'
  },
  {
    id: 13,
    nazwa: 'Yves Saint Laurent Black Opium',
    cena: 450,
    ocena: 4.6,
    obrazek: 'assets/ysl-black-opium.jpg',
    opis: 'Zmysłowy zapach z kawowymi akcentami i wanilią.',
    nutyZapachowe: 'Kawa, Wanilia, Kwiat pomarańczy',
    pojemnosc: '90 ml',
    rodzaj: 'Eau de Parfum'
  },
  {
    id: 14,
    nazwa: 'Dior J’adore',
    cena: 480,
    ocena: 4.9,
    obrazek: 'assets/dior-jadore.jpg',
    opis: 'Kwiatowa kompozycja symbolizująca kobiecość i luksus.',
    nutyZapachowe: 'Ylang-Ylang, Róża damasceńska, Jaśmin',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Parfum'
  },
  {
    id: 15,
    nazwa: 'Gucci Bloom',
    cena: 390,
    ocena: 4.5,
    obrazek: 'assets/gucci-bloom.jpg',
    opis: 'Bujny, kwiatowy zapach inspirowany ogrodem w pełnym rozkwicie.',
    nutyZapachowe: 'Tuberoza, Jaśmin, Rangoon Creeper',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Parfum'
  },
  {
    id: 16,
    nazwa: 'Armani Sí',
    cena: 430,
    ocena: 4.6,
    obrazek: 'assets/armani-si.jpg',
    opis: 'Nowoczesny szyprowy zapach z nutami czarnej porzeczki.',
    nutyZapachowe: 'Czarna porzeczka, Róża, Wanilia',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Parfum'
  },
  {
    id: 17,
    nazwa: 'Marc Jacobs Daisy',
    cena: 370,
    ocena: 4.4,
    obrazek: 'assets/marc-jacobs-daisy.jpg',
    opis: 'Świeży, lekki zapach idealny na dzień.',
    nutyZapachowe: 'Truskawka, Liść fiołka, Jaśmin',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Toilette'
  },
  {
    id: 18,
    nazwa: 'Carolina Herrera Good Girl',
    cena: 460,
    ocena: 4.7,
    obrazek: 'assets/good-girl.jpg',
    opis: 'Zmysłowy i odważny zapach w kultowym flakonie.',
    nutyZapachowe: 'Kakao, Migdał, Kwiat pomarańczy',
    pojemnosc: '80 ml',
    rodzaj: 'Eau de Parfum'
  },
  {
    id: 19,
    nazwa: 'Calvin Klein Euphoria',
    cena: 350,
    ocena: 4.3,
    obrazek: 'assets/ck-euphoria.jpg',
    opis: 'Egzotyczny, orientalny zapach dla nowoczesnych kobiet.',
    nutyZapachowe: 'Granat, Orchidea, Mahoniowiec',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Parfum'
  }
]
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
