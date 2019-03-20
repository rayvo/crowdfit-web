import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAsClubComponent } from './signup-as-club.component';

describe('SignupAsClubComponent', () => {
  let component: SignupAsClubComponent;
  let fixture: ComponentFixture<SignupAsClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAsClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAsClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
