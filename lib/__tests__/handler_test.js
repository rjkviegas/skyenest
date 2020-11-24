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

    describe('notFound handler', () => {
        it('renders 404 page', () => { 
            const req = {};
            const res = { render: jest.fn() };

            handlers.notFound(req, res);
            expect(res.render.mock.calls.length).toBe(1);
            expect(res.render.mock.calls[0][0]).toBe('404');
        })
    })

    describe('serverError handler', () => {
        it('renders 500 page', () => {
            const err = {}; 
            const req = {};
            const res = { render: jest.fn() };
            const next = jest.fn();

            handlers.serverError(err, req, res, next);
            expect(res.render.mock.calls.length).toBe(1);
            expect(res.render.mock.calls[0][0]).toBe('500');
        })
    })
});