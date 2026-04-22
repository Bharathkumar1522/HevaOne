const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public');
const files = fs.readdirSync(dir);

async function optimize() {
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg')) {
      const p = path.join(dir, file);
      const out = p.replace(/\.(png|jpg)$/, '.webp');
      
      console.log('Optimizing', file);
      
      let s = sharp(p);
      const metadata = await s.metadata();
      
      if (metadata.width > 1920) {
        s = s.resize(1920);
      }
      
      await s.webp({ quality: 80 }).toFile(out);
      console.log('Created', out);
    }
  }
}
optimize();
