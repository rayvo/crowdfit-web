import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAppliedComponent } from './signup-applied.component';

describe('SignupAppliedComponent', () => {
  let component: SignupAppliedComponent;
  let fixture: ComponentFixture<SignupAppliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAppliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
