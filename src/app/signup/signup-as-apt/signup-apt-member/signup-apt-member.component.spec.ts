import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAptMemberComponent } from './signup-apt-member.component';

describe('SignupAptMemberComponent', () => {
  let component: SignupAptMemberComponent;
  let fixture: ComponentFixture<SignupAptMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAptMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAptMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
