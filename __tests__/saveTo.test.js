import mock from 'mock-fs';
import fs from 'fs';
import saveTo from '../src/saveTo.js';

beforeEach(() => {
  mock({
    'path/to/save': {},
  });
});

test('saveTo creates a file with the correct content', async () => {
  const outputPath = 'path/to/save/test-page.html';
  const contentToSave = 'some content';
  await saveTo(outputPath, contentToSave);
  const savedContent = await fs.promises.readFile(outputPath, 'utf-8');
  expect(savedContent).toBe(contentToSave);
});

afterEach(mock.restore);
