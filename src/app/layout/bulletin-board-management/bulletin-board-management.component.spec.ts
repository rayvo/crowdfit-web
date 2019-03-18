import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinBoardManagementComponent } from './bulletin-board-management.component';

describe('BulletinBoardManagementComponent', () => {
  let component: BulletinBoardManagementComponent;
  let fixture: ComponentFixture<BulletinBoardManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletinBoardManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletinBoardManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
