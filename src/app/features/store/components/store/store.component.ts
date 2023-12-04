import { Component, inject } from '@angular/core';
import { Item, StoreService } from '../../services/store.service';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

  storeService: StoreService = inject(StoreService);

  protected items$ = this.storeService.items$;

  addToCart(item: Item): void {
    this.storeService.addToCart(item);
  }
}

