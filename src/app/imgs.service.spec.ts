import { TestBed } from '@angular/core/testing';

import { ImgsService } from './imgs.service';

describe('ImgsService', () => {
  let service: ImgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
