import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [CommonModule],
  template: `
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
            <label class="mr-4" for="milk">Milk</label>
            <button
              disabled={milk === 0 ? true : false}}
              type="button"
              (click)="decrement('milk')"
              class="px-2 bg-gray-300 rounded"
            >
              -
            </button>
            <input
              type="text"
              [value]="milk"
              readonly
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
            <label class="mr-4" for="syrup">Syrup</label>
            <button
              disabled={milk === 0 ? true : false}}
              type="button"
              (click)="decrement('milk')"
              class="px-2 bg-gray-300 rounded"
            >
              -
            </button>
            <input
              type="text"
              [value]="syrup"
              readonly
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
          <div
            class="flex items-center mt
          -2"
          >
            <label class="mr-4" for="caffeine">Caffeine</label>
            <button
              disabled={{milk === 0 ? true : false}}
              type="button"
              (click)="decrement('milk')"
              class="px-2 bg-gray-300 rounded"
            >
              -
            </button>
            <input
              type="text"
              [value]="caffeine"
              readonly
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
          <input
            type="submit"
            value="Submit"
            class="mt-4 px-4 py-2 bg-gray-300 rounded"
          />
        </div>
      </form>
    </div>

    <div *ngIf="orderSummary" class="mt-4">
      <h3>Order Summary:</h3>
      <p>{{ orderSummary }}</p>
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
  orderSummary: string | null = null;

  showForm(type: string) {
    this.formVisible = true;
    this.formLabel = type === 'hot' ? 'Hot Drink' : 'Cold Drink';
    this.selectedType = type;
    this.loadFromLocalStorage();
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
    const data = {
      selectedType: this.selectedType,
      milk: this.milk,
      syrup: this.syrup,
      caffeine: this.caffeine,
      orderSummary: this.orderSummary,
    };
    localStorage.setItem('drinkOrder', JSON.stringify(data));
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem('drinkOrder');
    if (data) {
      const parsedData = JSON.parse(data);
      if (parsedData.selectedType === this.selectedType) {
        this.milk = parsedData.milk;
        this.syrup = parsedData.syrup;
        this.caffeine = parsedData.caffeine;
        this.orderSummary = parsedData.orderSummary;
      }
    }
  }
}
