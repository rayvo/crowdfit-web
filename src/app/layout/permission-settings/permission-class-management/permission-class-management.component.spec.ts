import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionClassManagementComponent } from './permission-class-management.component';

describe('PermissionClassManagementComponent', () => {
  let component: PermissionClassManagementComponent;
  let fixture: ComponentFixture<PermissionClassManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionClassManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionClassManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
