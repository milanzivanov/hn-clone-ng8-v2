import { TestBed } from '@angular/core/testing';

import { HnService } from './hn.service';

describe('HnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HnService = TestBed.get(HnService);
    expect(service).toBeTruthy();
  });
});
