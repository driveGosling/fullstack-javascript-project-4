import fsp from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import getImgs from '../src/getImgs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fsp.readFile(getFixturePath(filename), 'utf-8');

test('getImgs test', async () => {
  const expected = ['<img src="/assets/professions/nodejs.png" alt="Иконка профессии Node.js-программист" />'];
  const html = await readFile('data.html');
  const imgs = getImgs(html);
  expect(imgs).toEqual(expected);
});
