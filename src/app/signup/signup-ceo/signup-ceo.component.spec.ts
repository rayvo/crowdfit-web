import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCeoComponent } from './signup-ceo.component';

describe('SignupCeoComponent', () => {
  let component: SignupCeoComponent;
  let fixture: ComponentFixture<SignupCeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupCeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
