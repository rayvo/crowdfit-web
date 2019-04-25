import { TestBed, async, inject } from '@angular/core/testing';

import { ResidentGuard } from './resident.guard';

describe('RoleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResidentGuard]
    });
  });

  it('should ...', inject([ResidentGuard], (guard: ResidentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
