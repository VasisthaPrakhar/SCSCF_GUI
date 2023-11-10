import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScscfComponent } from './scscf.component';

describe('ScscfComponent', () => {
  let component: ScscfComponent;
  let fixture: ComponentFixture<ScscfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScscfComponent]
    });
    fixture = TestBed.createComponent(ScscfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
