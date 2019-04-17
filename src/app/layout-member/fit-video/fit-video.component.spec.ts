import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitVideoComponent } from './fit-video.component';

describe('FitVideoComponent', () => {
  let component: FitVideoComponent;
  let fixture: ComponentFixture<FitVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
