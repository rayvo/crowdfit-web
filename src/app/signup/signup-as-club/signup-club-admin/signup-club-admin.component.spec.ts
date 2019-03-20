import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupClubAdminComponent } from './signup-club-admin.component';

describe('SignupClubAdminComponent', () => {
  let component: SignupClubAdminComponent;
  let fixture: ComponentFixture<SignupClubAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupClubAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupClubAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
