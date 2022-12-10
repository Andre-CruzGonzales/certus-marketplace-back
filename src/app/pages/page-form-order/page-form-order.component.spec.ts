import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormOrderComponent } from './page-form-order.component';

describe('PageFormOrderComponent', () => {
  let component: PageFormOrderComponent;
  let fixture: ComponentFixture<PageFormOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFormOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageFormOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
