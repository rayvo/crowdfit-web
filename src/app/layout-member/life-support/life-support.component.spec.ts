import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeSupportComponent } from './life-support.component';

describe('LifeSupportComponent', () => {
  let component: LifeSupportComponent;
  let fixture: ComponentFixture<LifeSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
