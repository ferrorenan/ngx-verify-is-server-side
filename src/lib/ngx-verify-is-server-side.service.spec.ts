import { TestBed } from '@angular/core/testing';

import { NgxVerifyIsServerSideService } from './ngx-verify-is-server-side.service';

describe('NgxVerifyIsServerSideService', () => {
  let service: NgxVerifyIsServerSideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxVerifyIsServerSideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
