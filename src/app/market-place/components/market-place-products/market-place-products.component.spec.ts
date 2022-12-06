import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPlaceProductsComponent } from './market-place-products.component';

describe('MarketPlaceProductsComponent', () => {
  let component: MarketPlaceProductsComponent;
  let fixture: ComponentFixture<MarketPlaceProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPlaceProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketPlaceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
