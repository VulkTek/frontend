const https = require('https');
const fs = require('fs');
const path = require('path');

const fontsDir = path.join(__dirname, 'fonts');
if (!fs.existsSync(fontsDir)) fs.mkdirSync(fontsDir);

function fetch(url, options = {}) {
    return new Promise((resolve, reject) => {
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

function downloadBinary(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (res) => {
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function processFont(cssUrl, outputFile) {
    const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36';
    let css = await fetch(cssUrl, { headers: { 'User-Agent': userAgent } });
    
    const urlRegex = /url\((https:\/\/[^)]+)\)/g;
    let match;
    const downloads = [];
    
    while ((match = urlRegex.exec(css)) !== null) {
        const fullUrl = match[1];
        const filename = path.basename(fullUrl);
        const localPath = `fonts/${filename}`;
        
        css = css.replace(fullUrl, localPath);
        downloads.push(downloadBinary(fullUrl, path.join(fontsDir, filename)));
    }
    
    fs.writeFileSync(outputFile, css);
    await Promise.all(downloads);
    console.log(`Saved ${outputFile} and fonts.`);
}

async function run() {
    await processFont('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@500&display=swap', 'fonts.css');
    await processFont('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap', 'icons.css');
}

run();
