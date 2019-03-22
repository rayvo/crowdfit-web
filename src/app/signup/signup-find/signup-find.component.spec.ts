import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFindComponent } from './signup-find.component';

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
