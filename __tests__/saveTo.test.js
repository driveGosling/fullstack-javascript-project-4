import mock from 'mock-fs';
import fsp from 'fs/promises';
import saveTo from '../src/saveTo.js';

beforeEach(() => {
  mock({
    dir1: {},
  });
});

test('saveTo saves downloaded file', async () => {
  const path = 'dir1/file.txt';
  const data = 'some data';
  await saveTo(path, data);
  const actual = await fsp.readFile(path, 'utf-8');
  expect(actual).toEqual(data);
});

afterEach(mock.restore);
