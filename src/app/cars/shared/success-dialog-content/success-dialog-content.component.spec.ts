import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDialogContentComponent } from './success-dialog-content.component';

describe('SuccessDialogContentComponent', () => {
  let component: SuccessDialogContentComponent;
  let fixture: ComponentFixture<SuccessDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
