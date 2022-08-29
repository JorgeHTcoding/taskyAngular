import { TestBed } from '@angular/core/testing';

import { CreedentialsServiceService } from './creedentials-service.service';

describe('CreedentialsServiceService', () => {
  let service: CreedentialsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreedentialsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
