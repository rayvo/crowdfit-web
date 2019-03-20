import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupClubMemberComponent } from './signup-club-member.component';

describe('SignupClubMemberComponent', () => {
  let component: SignupClubMemberComponent;
  let fixture: ComponentFixture<SignupClubMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupClubMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupClubMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
