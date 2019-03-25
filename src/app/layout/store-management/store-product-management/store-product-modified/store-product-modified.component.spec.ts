import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductModifiedComponent } from './store-product-modified.component';

describe('StoreProductModifiedComponent', () => {
  let component: StoreProductModifiedComponent;
  let fixture: ComponentFixture<StoreProductModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
