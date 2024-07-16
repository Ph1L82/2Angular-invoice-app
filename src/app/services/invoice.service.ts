import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;

  constructor() {}

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return { ...this.invoice, total};
  }

  remove(id: number): Invoice{
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  calculateTotal() {
    return this.invoice.items.reduce(
      (total, item) => total + (item.quantity * item.price),
      // (total, item) => total + item.subtotal(),
      0
    );
  }
}
