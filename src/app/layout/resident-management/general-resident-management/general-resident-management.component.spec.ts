import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralResidentManagementComponent } from './general-resident-management.component';

describe('GeneralResidentManagementComponent', () => {
  let component: GeneralResidentManagementComponent;
  let fixture: ComponentFixture<GeneralResidentManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralResidentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralResidentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
