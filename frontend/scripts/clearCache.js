const fs = require('fs');
const {join} = require('path');

const cacheDir = join(__dirname, '..', 'node_modules/.cache');

fs.rmSync(cacheDir, {recursive: true, force: true});
