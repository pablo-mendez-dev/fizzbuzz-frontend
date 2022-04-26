import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FizzbuzzServicesService } from './fizzbuzz-services.service';

describe('FizzbuzzServicesService', () => {
  let service: FizzbuzzServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        FizzbuzzServicesService
      ],

    });
    service = TestBed.inject(FizzbuzzServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
