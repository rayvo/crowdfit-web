import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth.GuardComponent } from './auth.guard.component';

describe('Auth.GuardComponent', () => {
  let component: Auth.GuardComponent;
  let fixture: ComponentFixture<Auth.GuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Auth.GuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Auth.GuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
