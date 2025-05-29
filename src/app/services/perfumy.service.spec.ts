import { TestBed } from '@angular/core/testing';

import { PerfumyService } from './perfumy.service';

describe('PerfumyService', () => {
  let service: PerfumyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfumyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
