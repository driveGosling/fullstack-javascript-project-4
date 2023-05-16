import nock from 'nock';
import getData from '../src/getData.js';

nock.disableNetConnect();

test('getData sends request', async () => {
  const scope = nock('https://ru.hexlet.io')
    .get('/courses')
    .reply(200, 'data');

  const url = 'https://ru.hexlet.io/courses';
  await getData(url);
  expect(scope.isDone()).toBe(true);
});
