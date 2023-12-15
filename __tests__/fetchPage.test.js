import nock from 'nock';
import fetchPage from '../src/fetchPage.js';

nock.disableNetConnect();

test('fetchPage sends a GET request', async () => {
  nock('https://ru.hexlet.io')
    .get('/courses')
    .reply(200, { data: 'Mocked data' });

  await fetchPage('https://ru.hexlet.io/courses');
  expect(nock.isDone()).toBe(true);
});

afterEach(() => {
  nock.cleanAll();
});
