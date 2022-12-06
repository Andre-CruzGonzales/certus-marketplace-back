import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsNavbarComponent } from './cms-navbar.component';

describe('CmsNavbarComponent', () => {
  let component: CmsNavbarComponent;
  let fixture: ComponentFixture<CmsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
