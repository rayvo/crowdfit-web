import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureCourseComponent } from './culture-course.component';

describe('CultureCourseComponent', () => {
  let component: CultureCourseComponent;
  let fixture: ComponentFixture<CultureCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
