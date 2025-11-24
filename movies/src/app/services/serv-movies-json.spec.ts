import { TestBed } from '@angular/core/testing';

import { ServMoviesJson } from './serv-movies-json';

describe('ServMoviesJson', () => {
  let service: ServMoviesJson;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServMoviesJson);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
