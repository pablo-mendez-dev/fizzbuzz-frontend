import { TestBed } from '@angular/core/testing';

import { FizzbuzzServicesService } from './fizzbuzz-services.service';

describe('FizzbuzzServicesService', () => {
  let service: FizzbuzzServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzbuzzServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
