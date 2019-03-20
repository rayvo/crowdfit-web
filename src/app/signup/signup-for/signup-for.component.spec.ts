import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupForComponent } from './signup-for.component';

describe('SignupForComponent', () => {
  let component: SignupForComponent;
  let fixture: ComponentFixture<SignupForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
