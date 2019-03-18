import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ResidentManagementComponent } from './resident-management.component';
import { ResidentModule } from './resident.module';

describe('ResidentManagementComponent', () => {
  let component: ResidentManagementComponent;
  let fixture: ComponentFixture<ResidentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ResidentModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [ ResidentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
