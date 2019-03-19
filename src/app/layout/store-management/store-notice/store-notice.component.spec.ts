import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNoticeComponent } from './store-notice.component';

describe('StoreNoticeComponent', () => {
  let component: StoreNoticeComponent;
  let fixture: ComponentFixture<StoreNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
