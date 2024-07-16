import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent implements OnInit {
  public invoice!: Invoice;
  constructor(private service: InvoiceService) {}
  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}
