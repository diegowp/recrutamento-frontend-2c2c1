import { TestBed } from '@angular/core/testing';

import { ClashService } from './clash.service';

describe('ClashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClashService = TestBed.get(ClashService);
    expect(service).toBeTruthy();
  });
});
