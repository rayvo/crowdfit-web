import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionAccountingManagementComponent } from './permission-accounting-management.component';

describe('PermissionAccountingManagementComponent', () => {
  let component: PermissionAccountingManagementComponent;
  let fixture: ComponentFixture<PermissionAccountingManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionAccountingManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionAccountingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
