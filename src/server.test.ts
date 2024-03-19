import {start} from "./server";


describe('first test suite', ()=> {
    let server;
    beforeAll ( async () => {
        server = start();
        await server.ready();
    })

    afterAll ( async () => {
        await server.close();
    })

    it('test signup', async () => {
        const response = await server.inject({ method: 'GET', url: '/test_signup' });
        expect(response.statusCode).toBe(200);
        expect(response).toHaveProperty('cookies');
        expect(response.cookies[0]).toHaveProperty('name', 'access_token');
    })
})