import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerManagementComponent } from './locker-management.component';

describe('LockerManagementComponent', () => {
  let component: LockerManagementComponent;
  let fixture: ComponentFixture<LockerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
