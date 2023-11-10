import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastFewRegComponent } from './last-few-reg.component';

describe('LastFewRegComponent', () => {
  let component: LastFewRegComponent;
  let fixture: ComponentFixture<LastFewRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastFewRegComponent]
    });
    fixture = TestBed.createComponent(LastFewRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
