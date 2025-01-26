// scripts/copy-index.js
import fs from 'fs';

try {
    console.log('Starting copy-index.js...');
    
    // Read the index.html file
    console.log('Reading index.html...');
    const indexContent = fs.readFileSync('index.html', 'utf-8');
    console.log('Successfully read index.html');

    // Add base tag and update script source for production
    console.log('Updating content...');
    const updatedContent = indexContent
        .replace(
            '<meta name="viewport"',
            '<base href="/get_lit_test/"><meta name="viewport"'
        )
        .replace(
            '<script type="module" src="./src/my-app.ts"></script>',
            '<script type="module" src="./my-app.js"></script>'
        );

    // Ensure dist directory exists
    if (!fs.existsSync('dist')) {
        console.log('Creating dist directory...');
        fs.mkdirSync('dist', { recursive: true });
    }

    // Write the modified file to the dist directory
    console.log('Writing to dist/index.html...');
    fs.writeFileSync('dist/index.html', updatedContent);
    console.log('Successfully wrote dist/index.html');

} catch (error) {
    console.error('Error in copy-index.js:', error);
    process.exit(1);
}