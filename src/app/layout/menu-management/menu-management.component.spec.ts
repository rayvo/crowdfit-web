import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuManagementComponent } from './menu-management.component';
import { MenuModule } from './menu.module';

describe('MenuManagementComponent', () => {
  let component: MenuManagementComponent;
  let fixture: ComponentFixture<MenuManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MenuModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [ MenuManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
