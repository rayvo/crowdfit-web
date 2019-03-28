import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductEnrollmentComponent } from './store-product-enrollment.component';

describe('StoreProductEnrollmentComponent', () => {
  let component: StoreProductEnrollmentComponent;
  let fixture: ComponentFixture<StoreProductEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


