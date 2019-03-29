import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionResidentManagementComponent } from './permission-resident-management.component';

describe('PermissionResidentManagementComponent', () => {
  let component: PermissionResidentManagementComponent;
  let fixture: ComponentFixture<PermissionResidentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionResidentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionResidentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
