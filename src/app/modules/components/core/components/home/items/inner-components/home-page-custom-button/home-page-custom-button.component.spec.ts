import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCustomButtonComponent } from './home-page-custom-button.component';

describe('HomePageCustomButtonComponent', () => {
  let component: HomePageCustomButtonComponent;
  let fixture: ComponentFixture<HomePageCustomButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageCustomButtonComponent]
    });
    fixture = TestBed.createComponent(HomePageCustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
