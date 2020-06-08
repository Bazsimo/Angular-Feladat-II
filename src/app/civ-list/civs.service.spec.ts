import { TestBed } from '@angular/core/testing';

import { CivsService } from './civs.service';

describe('CivService', () => {
  let service: CivsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CivsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
