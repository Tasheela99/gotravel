import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSectionDividerComponent } from './home-page-section-divider.component';

describe('HomePageSectionDividerComponent', () => {
  let component: HomePageSectionDividerComponent;
  let fixture: ComponentFixture<HomePageSectionDividerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageSectionDividerComponent]
    });
    fixture = TestBed.createComponent(HomePageSectionDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
