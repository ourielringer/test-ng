import { TestBed } from '@angular/core/testing';

import { InputerService } from './inputer.service';

describe('InputerService', () => {
  let service: InputerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
