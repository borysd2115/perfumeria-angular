import { Injectable } from '@angular/core';

interface Perfum {
  id: number;
  nazwa: string;
  cena: number;
  ocena: number;
  obrazek: string;
  opis: string;
  nutyZapachowe?: string;
  pojemnosc?: string;
  rodzaj?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PerfumyService {
  private perfumy: Perfum[] = [
    {
      id: 1,
      nazwa: 'Dior Sauvage',
      cena: 399,
      ocena: 4.5,
      obrazek: '../assets/dior-sauvage.jpg',
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
    obrazek: '../assets/bleu-de-chanel.jpg',
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
    obrazek: '../assets/le-male.jpg',
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
    obrazek: '../assets/versace-eros.jpg',
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
    obrazek: '../assets/1-million.jpg',
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
    obrazek: '../assets/acqua-di-gio.jpg',
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
    obrazek: '../assets/noir-extreme.jpg',
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
    obrazek: '../assets/creed-aventus.jpg',
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
    obrazek: '../assets/the-one.jpg',
    opis: 'Elegancki i zmysłowy zapach o orientalnym charakterze',
    nutyZapachowe: 'Bazylia, Kardamon, Bursztyn',
    pojemnosc: '100 ml',
    rodzaj: 'Eau de Parfum'
  }
  ];

  getPerfumById(id: number): Perfum | undefined {
    return this.perfumy.find(p => p.id === id);
  }

  getPerfumy(): Perfum[] {
  return this.perfumy;
}
}