import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import loadpage from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename);
console.log(__dirname);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);