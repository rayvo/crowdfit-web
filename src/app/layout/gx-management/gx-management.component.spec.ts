import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GxManagementComponent } from './gx-management.component';

describe('GxManagementComponent', () => {
  let component: GxManagementComponent;
  let fixture: ComponentFixture<GxManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GxManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GxManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
