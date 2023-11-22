import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Yeetis' },
      { id: 13, name: 'y33t' },
      { id: 14, name: 'Prof. Steey' },
      { id: 15, name: 'y' },
      { id: 16, name: 'Mr. Yeeto' },
      { id: 17, name: 'Yeet Surfer' },
      { id: 18, name: 'YeetBoy' },
      { id: 19, name: 'Sir Yeetis Khan' },
      { id: 20, name: 'Yeetnado' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
