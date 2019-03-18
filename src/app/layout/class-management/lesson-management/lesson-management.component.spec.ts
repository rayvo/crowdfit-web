import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonManagementComponent } from './lesson-management.component';

describe('LessonManagementComponent', () => {
  let component: LessonManagementComponent;
  let fixture: ComponentFixture<LessonManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
