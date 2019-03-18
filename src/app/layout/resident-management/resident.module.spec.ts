import { ResidentModule } from './resident.module';


describe('ResidentModule', () => {
  let residentModule: ResidentModule;

  beforeEach(() => {
    residentModule = new ResidentModule();
  });

  it('should create an instance', () => {
    expect(residentModule).toBeTruthy();
  });
});
