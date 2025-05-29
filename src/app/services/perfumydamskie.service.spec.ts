import { TestBed } from '@angular/core/testing';

import { PerfumydamskieService } from './perfumydamskie.service';

describe('PerfumydamskieService', () => {
  let service: PerfumydamskieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfumydamskieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
