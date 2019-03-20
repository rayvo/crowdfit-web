import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupClubStaffComponent } from './signup-club-staff.component';

describe('SignupClubStaffComponent', () => {
  let component: SignupClubStaffComponent;
  let fixture: ComponentFixture<SignupClubStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupClubStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupClubStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
