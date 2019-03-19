import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductEditComponent } from './store-product-edit.component';

describe('StoreProductEditComponent', () => {
  let component: StoreProductEditComponent;
  let fixture: ComponentFixture<StoreProductEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
