import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegByPodComponent } from './reg-by-pod.component';

describe('RegByPodComponent', () => {
  let component: RegByPodComponent;
  let fixture: ComponentFixture<RegByPodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegByPodComponent]
    });
    fixture = TestBed.createComponent(RegByPodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
