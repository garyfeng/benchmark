// A script to scafold out a new component for development.
// This will create a component in the `src/components`
// directory based on the template in the `scripts/template`
// directory.
//
// Usage: node ./scripts/create-component.js MyNewComponent

const { join } = require('path');
const {
  existsSync,
  copySync,
  readFileSync,
  renameSync,
  readdirSync,
  writeFileSync
} = require('fs-extra');

const templateDir = './scripts/template';
const templateName = 'Component';
const outputDir = `./src/components`;

async function createComponent(componentName) {
  if (!componentName) {
    throw new Error('No component name specified');
  }

  const destination = `${outputDir}/${componentName}`;

  if (existsSync(destination)) {
    throw new Error('Component directory already exists');
  }

  if (!existsSync(templateDir)) {
    throw new Error('Template directory does not exist');
  }

  // copy files
  copySync(templateDir, destination);

  // get newly created files
  const match = RegExp(templateName, 'g');
  const files = readdirSync(destination);

  // update file contents
  files.forEach(file => {
    const filePath = join(destination, file);
    const data = readFileSync(filePath, 'utf8')
      .replace(RegExp(templateName, 'g'), componentName)
      .replace(
        RegExp(templateName.toLowerCase(), 'g'),
        componentName.toLowerCase()
      );
    writeFileSync(filePath, data, 'utf8');
  });

  // rename
  files
    .filter(file => file.match(match))
    .forEach(file => {
      const filePath = join(destination, file);
      const newFilePath = join(destination, file.replace(match, componentName));
      renameSync(filePath, newFilePath);
    });
  console.log(componentName, 'component created.');
}

createComponent(process.argv[2]);
