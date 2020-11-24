const request = require('supertest');
const app = require('../app');

describe('App test', () => {
    it('has a module', () => {
        expect(app).toBeDefined();
    });
});
