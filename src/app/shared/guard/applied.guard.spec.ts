import { TestBed, async, inject } from '@angular/core/testing';

import { AppliedGuard } from './applied.guard';

describe('NotappliedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppliedGuard]
    });
  });

  it('should ...', inject([AppliedGuard], (guard: AppliedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
