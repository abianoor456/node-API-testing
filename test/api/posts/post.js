const expext = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('supertest');
const server = require('../../../server');
var sleep = require('sleep-promise');

chai.use(chaiHttp);
describe('Get  /notes', () => {

    beforeEach(async () => {
        await sleep(100);
        //let result = await conn.connect();
    })

    it('If all posts are retrieved', async () => {

        console.log('server port', server.listen);

        let result = await chai.request(server).get('/api/v1/posts/')
        console.log('response: ', result.body);
    })

    // it('If all posts are retrieved', async () => {
    //     let result = await request(server).get('/user');
    //     console.log('response: ', result.body);
    // })
})
