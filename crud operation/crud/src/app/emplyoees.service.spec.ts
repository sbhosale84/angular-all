import { TestBed } from '@angular/core/testing';

import { EmplyoeesService } from './emplyoees.service';

describe('EmplyoeesService', () => {
  let service: EmplyoeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplyoeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
