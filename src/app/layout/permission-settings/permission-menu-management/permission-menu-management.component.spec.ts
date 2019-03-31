import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionMenuManagementComponent } from './permission-menu-management.component';

describe('PermissionMenuManagementComponent', () => {
  let component: PermissionMenuManagementComponent;
  let fixture: ComponentFixture<PermissionMenuManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionMenuManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionMenuManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
