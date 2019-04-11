import { LayoutMemberModule } from './layout-member.module';

describe('LayoutMemberModule', () => {
    let layoutMemberModule: LayoutMemberModule;

    beforeEach(() => {
        layoutMemberModule = new LayoutMemberModule();
    });

    it('should create an instance', () => {
        expect(layoutMemberModule).toBeTruthy();
    });
});
