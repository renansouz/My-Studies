import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrementComponent } from './decrement.component';

describe('DecrementComponent', () => {
  let component: DecrementComponent;
  let fixture: ComponentFixture<DecrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
