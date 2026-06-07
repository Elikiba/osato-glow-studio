import fs from 'fs';
import path from 'path';

// Copy index.html to dist/client and inject the correct script reference
const source = 'index.html';
const dest = 'dist/client/index.html';
const assetsDir = 'dist/client/assets';

try {
  // Find the main JS bundle (the largest one, typically index-*.js)
  const files = fs.readdirSync(assetsDir);
  const jsFiles = files.filter(f => f.startsWith('index-') && f.endsWith('.js'));
  
  if (jsFiles.length === 0) {
    throw new Error('No main bundle found in dist/client/assets');
  }
  
  // Find the largest JS file (the actual bundle)
  let mainBundle = jsFiles[0];
  let maxSize = 0;
  
  for (const file of jsFiles) {
    const size = fs.statSync(path.join(assetsDir, file)).size;
    if (size > maxSize) {
      maxSize = size;
      mainBundle = file;
    }
  }
  
  console.log(`Found main bundle: ${mainBundle} (${maxSize} bytes)`);
  
  // Read the source HTML
  let content = fs.readFileSync(source, 'utf-8');
  
  // Replace the script src with the actual bundle
  content = content.replace(
    /src="\/src\/client\.tsx"/,
    `src="/assets/${mainBundle}"`
  );
  
  // Write to destination
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, content);
  console.log(`✓ Copied and updated ${source} to ${dest}`);
} catch (error) {
  console.error(`✗ Failed to copy ${source}:`, error.message);
  process.exit(1);
}
