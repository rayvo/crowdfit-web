import { MenuModule } from './menu.module';


describe('DashboardModule', () => {
  let menuModule: MenuModule;

  beforeEach(() => {
    menuModule = new MenuModule();
  });

  it('should create an instance', () => {
    expect(menuModule).toBeTruthy();
  });
});
