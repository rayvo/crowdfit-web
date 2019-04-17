import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanziComponent } from './danzi.component';

describe('DanziComponent', () => {
  let component: DanziComponent;
  let fixture: ComponentFixture<DanziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
