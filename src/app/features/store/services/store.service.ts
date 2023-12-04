import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

export interface Item {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private readonly http: HttpClient = inject(HttpClient);

  readonly items$ = this.http.get<Item[]>('https://jsonplaceholder.typicode.com/photos', { params: { albumId: 1 }});


  readonly addedItems$ = new ReplaySubject<Item>(0);

  addToCart(item: Item): void {
    this.addedItems$.next(item);
  }
}
