const request = require('supertest');
const app = require('../app');

describe('App test', () => {
    it('has a module', () => {
        expect(app).toBeDefined();
    });

    let server;

    beforeAll(() => {
        server = app.listen(3001)
    });

    afterAll(done => {
        server.close(done)
    });

    describe('home route test', () => {
        it('returns 200', async () => {
            const response = await request(server).get('/');
            expect(response.status).toBe(200);
        })
    })

    describe('about route test', () => {
        it('returns 200', async () => {
            const response = await request(server).get('/about');
            expect(response.status).toBe(200);
        })
    })
});
