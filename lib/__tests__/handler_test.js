const handlers = require('../handlers');

describe('Handlers test', () => {
    it('has a module', () => {
        expect(handlers).toBeDefined();
    });

    describe('home handler', () => {
        it('renders home page', () => { 
            const req = {};
            const res = { render: jest.fn() };
            
            handlers.home(req, res);
            expect(res.render.mock.calls.length).toBe(1);
            expect(res.render.mock.calls[0][0]).toBe('home');
        })
    })

    describe('about handler', () => {
        it('renders about page', () => { 
            const req = {};
            const res = { render: jest.fn() };

            handlers.about(req, res);
            expect(res.render.mock.calls.length).toBe(1);
            expect(res.render.mock.calls[0][0]).toBe('about');
        })
    })
});