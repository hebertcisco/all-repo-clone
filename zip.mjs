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

const finalFilesName = (format) => `${directoryToSave}/all-repo-clone.${format}`;

shell.exec(`zip ${finalFilesName('zip')} ${finalFilesName('js')} ${finalFilesName('exe')}`);
shell.rm(finalFilesName('exe'));