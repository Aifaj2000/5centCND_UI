import { TestBed } from '@angular/core/testing';

import { UserProductResolveService } from './user-product-resolve.service';

describe('UserProductResolveService', () => {
  let service: UserProductResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProductResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
