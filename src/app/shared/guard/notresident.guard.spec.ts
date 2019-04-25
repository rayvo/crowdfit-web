import { TestBed, async, inject } from '@angular/core/testing';

import { NotresidentGuard } from './notresident.guard';

describe('NotresidentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotresidentGuard]
    });
  });

  it('should ...', inject([NotresidentGuard], (guard: NotresidentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
