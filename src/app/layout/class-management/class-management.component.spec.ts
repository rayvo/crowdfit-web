import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClassManagementComponent } from './class-management.component';
import { ClassModule } from './class.module';

describe('ClassManagementComponent', () => {
  let component: ClassManagementComponent;
  let fixture: ComponentFixture<ClassManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClassModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [ ClassManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
