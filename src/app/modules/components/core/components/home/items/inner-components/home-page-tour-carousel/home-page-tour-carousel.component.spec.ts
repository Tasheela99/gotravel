import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTourCarouselComponent } from './home-page-tour-carousel.component';

describe('HomePageTourCarouselComponent', () => {
  let component: HomePageTourCarouselComponent;
  let fixture: ComponentFixture<HomePageTourCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageTourCarouselComponent]
    });
    fixture = TestBed.createComponent(HomePageTourCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
