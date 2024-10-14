import { TestBed } from '@angular/core/testing';

import { MemorialsService } from './memorials.service';

describe('MemorialsService', () => {
  let service: MemorialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemorialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
