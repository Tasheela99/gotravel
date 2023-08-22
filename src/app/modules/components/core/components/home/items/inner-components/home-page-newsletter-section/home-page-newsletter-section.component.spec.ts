import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageNewsletterSectionComponent } from './home-page-newsletter-section.component';

describe('HomePageNewsletterSectionComponent', () => {
  let component: HomePageNewsletterSectionComponent;
  let fixture: ComponentFixture<HomePageNewsletterSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageNewsletterSectionComponent]
    });
    fixture = TestBed.createComponent(HomePageNewsletterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
