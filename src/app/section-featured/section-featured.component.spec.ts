import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFeaturedComponent } from './section-featured.component';

describe('SectionFeaturedComponent', () => {
  let component: SectionFeaturedComponent;
  let fixture: ComponentFixture<SectionFeaturedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionFeaturedComponent]
    });
    fixture = TestBed.createComponent(SectionFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
