#!/usr/bin/env shelljs
import shell from 'shelljs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

if (!shell.which('zip')) {
  shell.echo('Sorry, this script requires zip');
  shell.exit(1);
}
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const currentDirectory = __dirname;

const directoryToSave = `${join(currentDirectory, 'lib')}`;

const tempFileName = 'all-repo-clone';
const ziptempFileName = `${tempFileName}.zip`;
const exetempFileName = `${tempFileName}.exe`;

const finalFilesName = (format) => `${directoryToSave}/${tempFileName}.${format}`;

shell.cp(`${finalFilesName('exe')}`, './');
shell.exec(`zip ${ziptempFileName} ${exetempFileName}`);
shell.mv(ziptempFileName, directoryToSave);
shell.rm(finalFilesName('exe'));
shell.rm(exetempFileName);