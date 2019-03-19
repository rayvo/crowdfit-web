import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProductPhotosComponent } from './store-product-photos.component';

describe('StoreProductPhotosComponent', () => {
  let component: StoreProductPhotosComponent;
  let fixture: ComponentFixture<StoreProductPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProductPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
