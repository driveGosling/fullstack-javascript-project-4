import { transformUrl } from '../src/transformUrl.js';

describe('transformUrl', () => {
  test('transforms url according to specified requirements', () => {
    const url = 'https://ru.hexlet.io/courses';
    const path = '/some/path';
    const result = transformUrl(url, path);
    const expected = 'ru-hexlet-io-courses';
    expect(result).toBe(expected);
  });
});
