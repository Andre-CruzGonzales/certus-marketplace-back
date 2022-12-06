import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMarketPlaceComponent } from './category-market-place.component';

describe('CategoryMarketPlaceComponent', () => {
  let component: CategoryMarketPlaceComponent;
  let fixture: ComponentFixture<CategoryMarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMarketPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
