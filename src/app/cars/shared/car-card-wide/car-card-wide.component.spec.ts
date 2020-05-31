import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarCardWideComponent } from './car-card-wide.component';

describe('CarCardWideComponent', () => {
  let component: CarCardWideComponent;
  let fixture: ComponentFixture<CarCardWideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarCardWideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCardWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
