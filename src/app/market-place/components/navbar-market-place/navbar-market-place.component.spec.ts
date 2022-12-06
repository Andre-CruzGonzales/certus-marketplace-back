import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMarketPlaceComponent } from './navbar-market-place.component';

describe('NavbarMarketPlaceComponent', () => {
  let component: NavbarMarketPlaceComponent;
  let fixture: ComponentFixture<NavbarMarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMarketPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
