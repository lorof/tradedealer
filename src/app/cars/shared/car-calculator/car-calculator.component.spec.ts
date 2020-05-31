import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCalculatorComponent } from './car-calculator.component';

describe('CarCalculatorComponent', () => {
  let component: CarCalculatorComponent;
  let fixture: ComponentFixture<CarCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarCalculatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
