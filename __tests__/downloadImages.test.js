import downloadImages from './../src/downloadImages.js';
import fs from 'fs';
import axios from 'axios';
import path from 'path';

jest.mock('axios');

describe('downloadImages', () => {
  it('creates a folder with downloaded images and makes requests by image URLs', async () => {
    // Mocking axios responses
    axios.get.mockResolvedValueOnce({ data: 'image1 data' });
    axios.get.mockResolvedValueOnce({ data: 'image2 data' });

    await downloadImages(mockHtmlString, mockFolderPath);

    // Check if the folder exists
    expect(fs.existsSync(mockFolderPath)).toBe(true);

    // Check if images are downloaded to the folder
    const folderContents = fs.readdirSync(mockFolderPath);
    expect(folderContents.length).toBeGreaterThan(0);

    // Verify that axios.get is called with the correct image URLs
    expect(axios.get).toHaveBeenCalledWith('http://example.com/image1.jpg', { responseType: 'arraybuffer' });
    expect(axios.get).toHaveBeenCalledWith('http://example.com/image2.jpg', { responseType: 'arraybuffer' });

    // You can add more specific assertions based on your implementation
  });
});
