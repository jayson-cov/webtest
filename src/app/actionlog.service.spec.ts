import { TestBed } from '@angular/core/testing';

import { ActionlogService } from './actionlog.service';

describe('ActionlogService', () => {
  let service: ActionlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
