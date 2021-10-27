const expext = require('chai').expect;
const request = require('supertest');
const server = require('../../../server')


describe('Get  /notes', () => {

    beforeEach(async () => {
        //let result = await conn.connect();
    })

    it('If all posts are retrieved', async () => {
        //console.log('server= ', conn.server)
        console.log('server port', server.listen);
        let result = await request(server).get('/api/v1/posts/');
        console.log('response: ', result.body);
    })
})
