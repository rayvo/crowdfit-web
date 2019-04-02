
import { PermissionSettingsModule } from './permission-settings.module';

describe('PermissionSettingsModule', () => {
  let permissionSettingsModule: PermissionSettingsModule;


  beforeEach(() => {
    permissionSettingsModule = new PermissionSettingsModule();
  });

  it('should create an instance', () => {
    expect(permissionSettingsModule).toBeTruthy();
  });
});
