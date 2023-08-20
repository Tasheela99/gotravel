import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTourPlaceCarouselComponent } from './home-page-tour-place-carousel.component';

describe('HomePageTourPlaceCarouselComponent', () => {
  let component: HomePageTourPlaceCarouselComponent;
  let fixture: ComponentFixture<HomePageTourPlaceCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageTourPlaceCarouselComponent]
    });
    fixture = TestBed.createComponent(HomePageTourPlaceCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
