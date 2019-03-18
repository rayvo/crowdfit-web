import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccountingManagementComponent } from './accounting-management.component';
import { AccountingModule } from './accounting.module';

describe('AccountingManagementComponent', () => {
  let component: AccountingManagementComponent;
  let fixture: ComponentFixture<AccountingManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AccountingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [ AccountingManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
