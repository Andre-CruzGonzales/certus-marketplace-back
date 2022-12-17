import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CategoriaService } from './categoria.service';

fdescribe('CategoriaService', () => {
  let service: CategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
     providers:[CategoriaService]
    });
    service = TestBed.inject(CategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
