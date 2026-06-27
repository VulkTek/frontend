const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of ['index.html', 'style.css']) {
  fs.copyFileSync(path.join(__dirname, file), path.join(dist, file));
}

for (const dir of ['images']) {
  fs.cpSync(path.join(__dirname, dir), path.join(dist, dir), { recursive: true });
}

console.log('Build output copied to dist/');
