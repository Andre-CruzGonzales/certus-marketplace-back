import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsProductosComponent } from './cms-productos.component';

describe('CmsProductosComponent', () => {
  let component: CmsProductosComponent;
  let fixture: ComponentFixture<CmsProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
