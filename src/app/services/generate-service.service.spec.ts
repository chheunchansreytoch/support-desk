import { TestBed } from '@angular/core/testing';

import { GenerateServiceService } from './generate-service.service';

describe('GenerateServiceService', () => {
  let service: GenerateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
