'use strict';
const { server } = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(server);
let id;

describe('test v1', () => {
  it('test post v1', async () => {
    const response = await request.post('/api/v1/clothes').send({
      name: 'test',
      color: 'test',
      size: 'test'
    });
    expect(response.status).toEqual(201);
    expect(response.body.name).toEqual('test');
    expect(response.body.color).toEqual('test');
    expect(response.body.size).toEqual('test');

    id = response.body._id;
  });
  it('test put v1', async () => {
    const response = await request.put(`/api/v1/clothes/${id}`).send({
      name: 'test',
      color: 'test',
      size: 'test'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.color).toEqual('test');
  });


  it('test get v1', async () => {
    const response = await request.get(`/api/v1/clothes/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.color).toEqual('test');
  });
  it('test delete v1', async () => {
    const response = await request.delete(`/api/v1/clothes/${id}`);
    expect(response.status).toEqual(200);
  });
  it('test get all v1', async () => {
    const response = await request.get('/api/v1/clothes');
    expect(response.status).toEqual(200);
  });
});


