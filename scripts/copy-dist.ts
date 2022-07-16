import { copyFileSync } from 'fs';

console.log('Copying README.ms & LICENSE & package.json into dist.');

const copyFiles = ['README.md', 'LICENSE', 'package.json'];
for (const file of copyFiles) {
  copyFileSync(`./${file}`, `./dist/${file}`);
}

/*
console.log('Copying configurations into dist.');

const srcDir = join(cwd(), 'lib', 'config');
const destDir = join(cwd(), 'dist', 'config');

copySync(srcDir, destDir);
*/
