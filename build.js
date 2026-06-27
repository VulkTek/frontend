const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist');
if (!fs.existsSync(dist)) fs.mkdirSync(dist, { recursive: true });

const filesToCopy = ['index.html', 'style.css', 'script.js'];
filesToCopy.forEach(f => {
    if (fs.existsSync(f)) {
        fs.copyFileSync(f, path.join(dist, f));
    }
});

const dirsToCopy = ['images', 'fonts'];
dirsToCopy.forEach(dir => {
    if (fs.existsSync(dir)) {
        const destDir = path.join(dist, dir);
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const srcPath = path.join(dir, file);
            if (fs.statSync(srcPath).isFile()) {
                fs.copyFileSync(srcPath, path.join(destDir, file));
            }
        });
    }
});
console.log('Build output copied to dist/');
