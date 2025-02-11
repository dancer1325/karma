describe('module-dep', () => {
    const module = require('simpleModule');

    it('should add numbers correctly', () => {
        expect(module.add(2, 3)).toBe(5);
    });

    it('should have a version', () => {
        expect(module.version).toBeDefined();
    });
});
