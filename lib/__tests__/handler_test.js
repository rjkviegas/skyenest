const handlers = require('../handlers');

describe('Handlers test', () => {
    it('has a module', () => {
        expect(handlers).toBeDefined();
    });

    describe('home handler', () => {
        it('renders home page', () => {
            const req = {};
            const res = {
                render: jest.fn()
            };
            handlers.home(req, res);
            const actual = res.render.mock.calls[0][0];
            const expected = 'home';
            expect(actual).toBe(expected);
        })
    })
});