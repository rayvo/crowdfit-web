import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAsAptComponent } from './signup-as-apt.component';

describe('SignupAsAptComponent', () => {
  let component: SignupAsAptComponent;
  let fixture: ComponentFixture<SignupAsAptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAsAptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAsAptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
