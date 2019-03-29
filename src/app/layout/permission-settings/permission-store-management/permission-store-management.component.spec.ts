import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionStoreManagementComponent } from './permission-store-management.component';

describe('PermissionStoreManagementComponent', () => {
  let component: PermissionStoreManagementComponent;
  let fixture: ComponentFixture<PermissionStoreManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionStoreManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionStoreManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
