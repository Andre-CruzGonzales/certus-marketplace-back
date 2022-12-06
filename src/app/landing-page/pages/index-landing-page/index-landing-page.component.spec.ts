import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLandingPageComponent } from './index-landing-page.component';

describe('IndexLandingPageComponent', () => {
  let component: IndexLandingPageComponent;
  let fixture: ComponentFixture<IndexLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
