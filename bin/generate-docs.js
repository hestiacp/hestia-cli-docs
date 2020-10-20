const fs = require('fs');
const path = require('path');
const { processCmds } = require('../lib/process-cmds');
const { generateAllCmdsDoc } = require('../lib/generate-docs');


const args = process.argv.slice(2);
const [hestiaRepo = 'https://github.com/hestiacp/hestiacp', hestiaBranch = 'main'] = args;

const cmds = processCmds({ hestiaRepo, hestiaBranch, cache: true, checkOldDocs: false, checkVesta:false });
const allCmdsDoc = generateAllCmdsDoc(cmds);

fs.writeFileSync(path.join(__dirname, '../docs/README.md'), allCmdsDoc, 'utf8');
