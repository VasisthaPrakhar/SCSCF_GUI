import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegByMonthComponent } from './reg-by-month.component';

describe('RegByMonthComponent', () => {
  let component: RegByMonthComponent;
  let fixture: ComponentFixture<RegByMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegByMonthComponent]
    });
    fixture = TestBed.createComponent(RegByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
