import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostNoticeManagementComponent } from './cost-notice-management.component';

describe('CostNoticeManagementComponent', () => {
  let component: CostNoticeManagementComponent;
  let fixture: ComponentFixture<CostNoticeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostNoticeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostNoticeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
