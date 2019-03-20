import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAptStaffComponent } from './signup-apt-staff.component';

describe('SignupAptStaffComponent', () => {
  let component: SignupAptStaffComponent;
  let fixture: ComponentFixture<SignupAptStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAptStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAptStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
