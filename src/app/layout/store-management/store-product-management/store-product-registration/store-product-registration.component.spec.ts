import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductRegistrationComponent } from './store-product-registration.component';

describe('StoreProductRegistrationComponent', () => {
  let component: StoreProductRegistrationComponent;
  let fixture: ComponentFixture<StoreProductRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
