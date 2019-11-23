const request = require('supertest');
const app = require('./app.js');

//check root 
describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/").then((response) => {
            expect(response.statusCode).toBe(200);
        })
    });
});

//testing async data
describe('Testing the /flower path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/flower');
        expect(response.statusCode).toBe(200);
    });
    //check number of retreived flowers
    test('Should fetch 104 flowers', async () => {
        const response = await request(app).get('/flower');
        expect(response.body.length).toBe(104);
    });
    //Check if the data fetched is correct
    test('Flower fetched should be Autumn Blush', async () => {
        const response = await request(app).get('/flower/?id=5dd3f4dd1c9d440000311ae9');
        expect(response.body[0].name).toBe('Autumn Blush');
    });
})
