import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form',
  imports: [CommonModule, MatIconModule, MatBadgeModule, MatButtonModule],
  template: `
    <div class="flex justify-end">
      <button
        class="mr-14"
        mat-icon-button
        [matBadge]="totalCartItems"
        matBadgeColor="warn"
      >
        <mat-icon>shopping_cart</mat-icon>
      </button>
    </div>
    <div class="flex justify-center space-x-4">
      <button
        (click)="showForm('hot')"
        [ngClass]="{
          'bg-red-500': selectedType === 'hot',
          'bg-gray-600': selectedType !== 'hot'
        }"
        class="px-4 py-2 text-white rounded-lg"
      >
        Hot
      </button>
      <button
        (click)="showForm('cold')"
        [ngClass]="{
          'bg-blue-500': selectedType === 'cold',
          'bg-gray-600': selectedType !== 'cold'
        }"
        class="px-4 py-2 text-white rounded-lg"
      >
        Cold
      </button>
    </div>

    <div *ngIf="formVisible" class="mt-4 ml-16">
      <form>
        <label for="drink">{{ formLabel }}</label>
        <div class="mt-4">
          <div class="flex items-center">
            <label class="mr-4" for="milk">Milk $1</label>
            <button
              [disabled]="milk === 0 ? true : false"
              type="button"
              (click)="decrement('milk')"
              class="px-2 bg-gray-300 rounded"
            >
              -
            </button>
            <input
              type="text"
              [value]="milk"
              maxlength="2"
              class="w-6 rounded-none text-center h-6 border"
            />
            <button
              type="button"
              (click)="increment('milk')"
              class="px-2 bg-gray-300 rounded"
            >
              +
            </button>
          </div>
          <div
            class="flex items-center mt
          -2"
          >
            <label class="mr-4" for="syrup">Syrup $0.50</label>
            <button
              [disabled]="syrup === 0 ? true : false"
              type="button"
              (click)="decrement('syrup')"
              class="px-2 bg-gray-300 rounded"
            >
              -
            </button>
            <input
              type="text"
              [value]="syrup"
              maxlength="2"
              class="w-6 rounded-none text-center h-6 border"
            />
            <button
              type="button"
              (click)="increment('syrup')"
              class="px-2 bg-gray-300 rounded"
            >
              +
            </button>
          </div>
          <div class="flex items-center mt-2">
            <label class="mr-4" for="caffeine">Caffeine $2</label>
            <button
              [disabled]="caffeine === 0 ? true : false"
              type="button"
              (click)="decrement('caffeine')"
              class="px-2 bg-gray-300 rounded"
            >
              -
            </button>
            <input
              type="text"
              [value]="caffeine"
              maxlength="2"
              class="w-6 rounded-none text-center h-6 border"
            />
            <button
              type="button"
              (click)="increment('caffeine')"
              class="px-2 bg-gray-300 rounded"
            >
              +
            </button>
          </div>
          <div>
            <input
              class="border-black text-sm border mt-4 px-4 py-2 rounded"
              type="text"
              placeholder="Add your Discount Code"
              #discountInput
            />
            <button
              class="bg-blue-400 ml-2 mt-4 px-4 py-2 rounded text-white"
              type="button"
              (click)="applyDiscount(discountInput.value)"
            >
              Apply
            </button>
          </div>
          <button
            type="button"
            class="mt-4 px-4 py-2 bg-gray-300 rounded"
            (click)="orderSummary = true"
          >
            Order
          </button>
        </div>
      </form>
    </div>

    <div *ngIf="orderSummary" class="mt-4 ml-10">
      <h3 class="font-bold">Order Summary:</h3>
      <p class="italic">Subtotal: $ {{ subTotal }}</p>
      <p class="italic">Tax: $ {{ tax }}</p>
      <p class="italic text-green-500" *ngIf="discountApplied">
        Discount Applied: $ {{ discount }}
      </p>
      <p class="text-xl">Total: $ {{ total }}</p>
    </div>
  `,
  styles: [],
})
export class FormComponent {
  formVisible = false;
  formLabel = '';
  selectedType: string | null = null;
  milk = 0;
  syrup = 0;
  caffeine = 0;
  subTotal = 0;
  total = 0;
  tax = 0;
  orderSummary: boolean = false;
  discountCode: string = '';
  discountApplied: boolean = false;
  discount: number = 0;
  totalCartItems = 0;

  showForm(type: string) {
    this.formVisible = true;
    this.formLabel = type === 'hot' ? 'Hot Drink' : 'Cold Drink';
    this.selectedType = type;
  }

  increment(type: string) {
    if (type === 'milk') {
      this.milk++;
    } else if (type === 'syrup') {
      this.syrup++;
    } else if (type === 'caffeine') {
      this.caffeine++;
    }
    this.saveToLocalStorage();
  }
  decrement(type: string) {
    if (type === 'milk') {
      this.milk--;
    } else if (type === 'syrup') {
      this.syrup--;
    } else if (type === 'caffeine') {
      this.caffeine--;
    }
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    this.subTotal = this.milk + this.syrup / 2 + this.caffeine * 2;
    this.tax = parseFloat((this.subTotal * 0.12).toFixed(2));
    this.total = parseFloat(
      (this.subTotal + this.tax - this.discount).toFixed(2)
    );
    this.totalCartItems = this.milk + this.syrup + this.caffeine;

    const data = {
      selectedType: this.selectedType,
      milk: this.milk,
      syrup: this.syrup,
      caffeine: this.caffeine,
      subTotal: this.subTotal,
      tax: this.tax,
      total: this.total,
      totalCartItems: this.totalCartItems,
    };
    localStorage.setItem('drinkOrder', JSON.stringify(data));
  }

  applyDiscount(discountCode: string) {
    if (discountCode === 'ABC') {
      this.discount = 5;
      this.discountApplied = true;
      this.saveToLocalStorage();
    } else {
      this.discountApplied = false;
      this.discount = 0;
    }
  }
}
