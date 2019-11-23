const request = require('supertest');
const app = require('./app.js');
const mongoose = require('mongoose')
const databaseName = 'floristTest'


beforeAll(async () => {
    const url = `mongodb://127.0.0.1/${databaseName}`
    await mongoose.connect(url, { useNewUrlParser: true })
})

//check root 
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/").then((response) => {
            expect(response.statusCode).toBe(200);
        })
    });
});

//testing async data
describe('Testing the /cards path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/cards');
        expect(response.statusCode).toBe(200);
    });
    //check number of retreived flowers
    test('Should fetch 16 flowers', async () => {
        const response = await request(app).get('/cards');
        expect(response.body.length).toBe(16);
    });
    //Check if the data fetched is correct
    test('Flower fetched should be Autumn Blush', async () => {
        const response = await request(app).get('/cards/?id=5dd3f4dd1c9d440000311ae9');
        expect(response.body[0].name).toBe('Autumn Blush');
    });
})

