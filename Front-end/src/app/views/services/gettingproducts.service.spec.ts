import { TestBed } from '@angular/core/testing';

import { GettingproductsService } from './gettingproducts.service';

describe('GettingproductsService', () => {
  let service: GettingproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettingproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
