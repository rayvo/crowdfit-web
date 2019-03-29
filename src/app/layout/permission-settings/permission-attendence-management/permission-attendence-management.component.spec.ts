import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionAttendenceManagementComponent } from './permission-attendence-management.component';

describe('PermissionAttendenceManagementComponent', () => {
  let component: PermissionAttendenceManagementComponent;
  let fixture: ComponentFixture<PermissionAttendenceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionAttendenceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionAttendenceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
