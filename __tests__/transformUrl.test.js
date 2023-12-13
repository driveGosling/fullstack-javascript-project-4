import transformUrl from '../src/transformUrl.js';

describe('transformUrl', () => {
  test('transforms url according to specified requirements', () => {
    const url = 'https://ru.hexlet.io/courses';
    const path = '/some/path';
    const result = transformUrl(url, path);
    const expected = '/some/path/ru-hexlet-io-courses.html';
    expect(result).toBe(expected);
  });
});
