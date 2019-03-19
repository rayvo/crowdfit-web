import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSubmanagementComponent } from './store-submanagement.component';

describe('StoreSubmanagementComponent', () => {
  let component: StoreSubmanagementComponent;
  let fixture: ComponentFixture<StoreSubmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreSubmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSubmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
