import { TestBed } from '@angular/core/testing';

import { PlagasService } from './plagas.service';

describe('PlagasService', () => {
  let service: PlagasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlagasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
