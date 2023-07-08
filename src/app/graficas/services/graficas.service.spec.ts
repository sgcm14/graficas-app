import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GraficasService } from 'src/app/graficas/services/graficas.service';

describe('GraficasService', () => {
  let service: GraficasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientModule ]
    });
    service = TestBed.inject(GraficasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
