import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexMarketPlaceComponent } from './index-market-place.component';

describe('IndexMarketPlaceComponent', () => {
  let component: IndexMarketPlaceComponent;
  let fixture: ComponentFixture<IndexMarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexMarketPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
