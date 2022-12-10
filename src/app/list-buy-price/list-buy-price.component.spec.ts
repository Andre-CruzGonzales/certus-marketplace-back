import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuyPriceComponent } from './list-buy-price.component';

describe('ListBuyPriceComponent', () => {
  let component: ListBuyPriceComponent;
  let fixture: ComponentFixture<ListBuyPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBuyPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBuyPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
