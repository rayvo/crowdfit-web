import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFindComponent } from './signup-find.component';
import { MyJusoSearchDialogComponent } from './signup-find-juso.component';

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
  let component: MyJusoSearchDialogComponent;
  let fixture: ComponentFixture<MyJusoSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyJusoSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJusoSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
