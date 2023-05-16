import saveTo from '../src/saveTo.js';
import mock from 'mock-fs';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const fsp = fs.promises;

/*
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
*/

beforeEach(() => {
  mock({
    'dir1': {}
  })
});

test('saveTo saves downloaded file', async () => {
  const path = 'dir1/file.txt';
  const data = 'some data';
  await saveTo(path, data);
  const actual = await fsp.readFile(path, 'utf-8');
  expect(actual).toEqual(data);
});

afterEach(mock.restore);
