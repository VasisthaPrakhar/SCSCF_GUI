import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasComponent } from './tas.component';

describe('TasComponent', () => {
  let component: TasComponent;
  let fixture: ComponentFixture<TasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasComponent]
    });
    fixture = TestBed.createComponent(TasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
