import { TestBed } from '@angular/core/testing';

import { GenericHttpServicesService } from './generic-http-services.service';

describe('GenericHttpServicesService', () => {
  let service: GenericHttpServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericHttpServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
