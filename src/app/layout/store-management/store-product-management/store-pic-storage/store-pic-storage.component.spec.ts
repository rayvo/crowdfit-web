import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePicStorageComponent } from './store-pic-storage.component';

describe('StorePicStorageComponent', () => {
  let component: StorePicStorageComponent;
  let fixture: ComponentFixture<StorePicStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorePicStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorePicStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
