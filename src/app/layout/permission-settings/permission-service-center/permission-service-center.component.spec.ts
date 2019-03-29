import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionServiceCenterComponent } from './permission-service-center.component';

describe('PermissionServiceCenterComponent', () => {
  let component: PermissionServiceCenterComponent;
  let fixture: ComponentFixture<PermissionServiceCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionServiceCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionServiceCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
