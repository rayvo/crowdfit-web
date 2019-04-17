import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartAdministrativeExpensesComponent } from './smart-administrative-expenses.component';

describe('SmartAdministrativeExpensesComponent', () => {
  let component: SmartAdministrativeExpensesComponent;
  let fixture: ComponentFixture<SmartAdministrativeExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartAdministrativeExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartAdministrativeExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
