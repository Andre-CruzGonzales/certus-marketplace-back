import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBuyCarComponent } from './list-buy-car.component';

describe('ListBuyCarComponent', () => {
  let component: ListBuyCarComponent;
  let fixture: ComponentFixture<ListBuyCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBuyCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBuyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
