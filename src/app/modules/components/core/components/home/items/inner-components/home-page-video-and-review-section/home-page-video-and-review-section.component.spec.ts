import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageVideoAndReviewSectionComponent } from './home-page-video-and-review-section.component';

describe('HomePageVideoAndReviewSectionComponent', () => {
  let component: HomePageVideoAndReviewSectionComponent;
  let fixture: ComponentFixture<HomePageVideoAndReviewSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageVideoAndReviewSectionComponent]
    });
    fixture = TestBed.createComponent(HomePageVideoAndReviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
