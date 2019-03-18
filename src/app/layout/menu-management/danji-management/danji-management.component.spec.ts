import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanjiManagementComponent } from './danji-management.component';

describe('DanjiManagementComponent', () => {
  let component: DanjiManagementComponent;
  let fixture: ComponentFixture<DanjiManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanjiManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanjiManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
