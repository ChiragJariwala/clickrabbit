import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPricingComponent } from './section-pricing.component';

describe('SectionPricingComponent', () => {
  let component: SectionPricingComponent;
  let fixture: ComponentFixture<SectionPricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPricingComponent]
    });
    fixture = TestBed.createComponent(SectionPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
