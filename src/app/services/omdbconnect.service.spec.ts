import { TestBed } from '@angular/core/testing';

import { OmdbconnectService } from './omdbconnect.service';

describe('OmdbconnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OmdbconnectService = TestBed.get(OmdbconnectService);
    expect(service).toBeTruthy();
  });
});
