const supergoose = require('@code-fellows/supergoose');
const { server } = require('.././src/server');
const request = supergoose(server);

describe('Server Test', () => {

  it('working test', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Home Page');
  });
  it('server errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
  it('invalid routes', async () => {
    const response = await request.get('/anything');
    expect(response.status).toEqual(404);
  });

});