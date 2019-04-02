import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFindComponent } from './signup-find.component';
import { SignupFindJusoComponent } from './signup-find-juso.component';

describe('SignupFindComponent', () => {
  let component: SignupFindComponent;
  let fixture: ComponentFixture<SignupFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('MyJusoSearchDialogComponent', () => {
  let component: SignupFindJusoComponent;
  let fixture: ComponentFixture<SignupFindJusoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFindJusoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFindJusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
