import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkProductCardComponent } from './mk-product-card.component';

describe('MkProductCardComponent', () => {
  let component: MkProductCardComponent;
  let fixture: ComponentFixture<MkProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MkProductCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MkProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
