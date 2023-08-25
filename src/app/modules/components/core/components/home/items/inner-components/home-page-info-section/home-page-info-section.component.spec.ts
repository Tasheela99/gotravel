import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageInfoSectionComponent } from './home-page-info-section.component';

describe('HomePageInfoSectionComponent', () => {
  let component: HomePageInfoSectionComponent;
  let fixture: ComponentFixture<HomePageInfoSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageInfoSectionComponent]
    });
    fixture = TestBed.createComponent(HomePageInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
