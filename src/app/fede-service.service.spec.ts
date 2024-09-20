import { TestBed } from '@angular/core/testing';

import { FedeServiceService } from './fede-service.service';

describe('FedeServiceService', () => {
  let service: FedeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FedeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
