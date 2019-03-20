import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAptAdminComponent } from './signup-apt-admin.component';

describe('SignupAptAdminComponent', () => {
  let component: SignupAptAdminComponent;
  let fixture: ComponentFixture<SignupAptAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAptAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAptAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
