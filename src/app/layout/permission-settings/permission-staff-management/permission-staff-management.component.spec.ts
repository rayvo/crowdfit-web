import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionStaffManagementComponent } from './permission-staff-management.component';

describe('PermissionStaffManagementComponent', () => {
  let component: PermissionStaffManagementComponent;
  let fixture: ComponentFixture<PermissionStaffManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionStaffManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionStaffManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
