const fs = require('fs');
const path = require('path');
const { processCmds } = require('../lib/process-cmds');


const args = process.argv.slice(2);

let isLegacy = false;
if (args[0] === '--legacy') {
	isLegacy = true;
	args.splice(0, 1);
}

let isOutput = false;
if (args[0] === '--output') {
	isOutput = true;
	args.splice(0, 1);
}

const [hestiaRepo = 'https://github.com/hestiacp/hestiacp', hestiaBranch = 'main'] = args;
const cmds = processCmds({ hestiaRepo, hestiaBranch, cache: false });

if (isOutput) {
	fs.writeFileSync(path.join(process.cwd(), 'hestia-cmds.json'), JSON.stringify(cmds, null, 2));
}
