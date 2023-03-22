require('dotenv').config();
const express = require('express');
const request = require('supertest');
const { StatusCodes } = require('http-status-codes');
const app = express();
const path = '/files/data';

describe('files/data API E2E testing with token', () => {
    beforeAll(() => {
        app.use(path, require('../src/routes/filesData.routes'));
    })
    beforeEach(() => {
        jest.clearAllMocks();
    })
    test('should response status code 200 with a correct token', async () => {
        const res = await request(app).get(path).send();
        expect(res.statusCode).toBe(StatusCodes.OK);
    });
});