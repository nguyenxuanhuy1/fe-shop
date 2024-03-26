import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccrandomComponent } from './accrandom.component';

describe('AccrandomComponent', () => {
  let component: AccrandomComponent;
  let fixture: ComponentFixture<AccrandomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccrandomComponent]
    });
    fixture = TestBed.createComponent(AccrandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
