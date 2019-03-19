import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorApprovalInformationComponent } from './vendor-approval-information.component';

describe('VendorApprovalInformationComponent', () => {
  let component: VendorApprovalInformationComponent;
  let fixture: ComponentFixture<VendorApprovalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorApprovalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorApprovalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
