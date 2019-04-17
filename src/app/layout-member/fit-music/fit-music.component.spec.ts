import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitMusicComponent } from './fit-music.component';

describe('FitMusicComponent', () => {
  let component: FitMusicComponent;
  let fixture: ComponentFixture<FitMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
