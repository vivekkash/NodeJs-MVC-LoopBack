import {Client, expect} from '@loopback/testlab';
import {SampleApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HelloworldController', () => {
  let app: SampleApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  it('invokes GET /hello-world', async () => {
    const res = await client.get('/hello-world').expect(200);
    expect(res.body).to.containEql({message: 'Hello World'});
  });

  after(async () => {
    await app.stop();
  });
});
