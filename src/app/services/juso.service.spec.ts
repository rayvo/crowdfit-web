import { TestBed } from '@angular/core/testing';

import { JusoService } from './juso.service';

describe('JusoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JusoService = TestBed.get(JusoService);
    expect(service).toBeTruthy();
  });
});
