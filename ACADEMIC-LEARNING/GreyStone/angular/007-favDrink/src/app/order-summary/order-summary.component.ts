import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-summary',
  template: `
    <div class="mt-4">
      <h3>Order Summary:</h3>
      <p>{{ orderSummary }}</p>
    </div>
  `,
  styles: [],
})
export class OrderSummaryComponent implements OnInit {
  orderSummary: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.orderSummary = params['orderSummary'];
    });
  }
}
