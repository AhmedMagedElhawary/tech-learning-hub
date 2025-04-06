// scripts/extract-schema.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function main() {
  try {
    // Find all schema files
    const schemaFiles = await glob('src/modules/*/schema.ts', {
      cwd: projectRoot
    });

    // Output file for the combined schema
    const outputFile = path.join(projectRoot, 'schema.graphql');

    // Process each file to extract GraphQL SDL
    let combinedSchema = '';

    for (const file of schemaFiles) {
      const filePath = path.join(projectRoot, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract schema from the string literal in the file
      const match = content.match(/`([\s\S]*?)`/);
      if (match && match[1]) {
        const schema = match[1].trim();
        combinedSchema += `\n# From ${file}\n${schema}\n`;
        console.log(`Extracted schema from ${file}`);
      } else {
        console.warn(`Could not extract schema from ${file}`);
      }
    }

    // Write the combined schema to file
    fs.writeFileSync(outputFile, combinedSchema);
    console.log(`Combined schema written to ${outputFile}`);
  } catch (error) {
    console.error('Error extracting schema:', error);
    process.exit(1);
  }
}

main();