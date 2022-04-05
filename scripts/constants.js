const pkg = require('../package.json');
const BASE_URL = 'https://unpkg.com';
const REPO_NAME = 'all-repo-clone';
const SHEBANG_PWSH = '#!/usr/bin/env pwsh';
const APP_VERSION = pkg.version;

module.exports = {
    BASE_URL,
    REPO_NAME,
    SHEBANG_PWSH,
    APP_VERSION
}