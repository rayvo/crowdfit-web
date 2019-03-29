import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionLockerManagementComponent } from './permission-locker-management.component';

describe('PermissionLockerManagementComponent', () => {
  let component: PermissionLockerManagementComponent;
  let fixture: ComponentFixture<PermissionLockerManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionLockerManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionLockerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
