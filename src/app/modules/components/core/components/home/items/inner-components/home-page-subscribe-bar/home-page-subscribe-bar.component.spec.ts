import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSubscribeBarComponent } from './home-page-subscribe-bar.component';

describe('HomePageSubscribeBarComponent', () => {
  let component: HomePageSubscribeBarComponent;
  let fixture: ComponentFixture<HomePageSubscribeBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageSubscribeBarComponent]
    });
    fixture = TestBed.createComponent(HomePageSubscribeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
