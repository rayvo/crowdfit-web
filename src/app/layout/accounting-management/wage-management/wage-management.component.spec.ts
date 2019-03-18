import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WageManagementComponent } from './wage-management.component';

describe('WageManagementComponent', () => {
  let component: WageManagementComponent;
  let fixture: ComponentFixture<WageManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WageManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WageManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
