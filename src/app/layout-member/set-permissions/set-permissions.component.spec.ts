import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPermissionsComponent } from './set-permissions.component';

describe('SetPermissionsComponent', () => {
  let component: SetPermissionsComponent;
  let fixture: ComponentFixture<SetPermissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPermissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
