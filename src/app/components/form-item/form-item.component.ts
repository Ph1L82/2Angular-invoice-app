import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css',
})
export class FormItemComponent {
  @Output() addItemEventEmitter = new EventEmitter();

  private counterId: number = 5;

  item: any = {
    product: '',
    price: '',
    quantity: '',
  };
  onSubmit(): void {
    this.addItemEventEmitter.emit({ id: this.counterId, ...this.item });
    this.counterId++;
    this.item = {
      product: '',
      price: '',
      quantity: '',
    };
  }
}
