const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { processCmds } = require('../lib/process-cmds');


const args = process.argv.slice(2);

let isLegacy = false;
if (args[0] === '--legacy') {
    isLegacy = true;
    args.splice(0, 1);
}

let isCache = false;
if (args[0] === '--cache') {
    isCache = true;
    args.splice(0, 1);
}

const [hestiaBinRelPath, hestiaRepo = 'https://github.com/hestiacp/hestiacp', hestiaBranch = 'main'] = args;

assert(hestiaBinRelPath);

const cmds = processCmds({ hestiaRepo, hestiaBranch, cache: isCache, checkOldDocs: isLegacy, checkVesta: isLegacy });

const hestiaBinPath = path.resolve(process.cwd(), hestiaBinRelPath);
const hestiaBinFiles = fs.readdirSync(hestiaBinPath).filter(file => /^v-[\w-]+$/.test(file));

const mismatchedCmds = [
    ...Object.keys(cmds).filter(cmdName => !hestiaBinFiles.includes(cmdName)),
    ...hestiaBinFiles.filter(binName => !(binName in cmds))
];

if (mismatchedCmds.length) {
    console.warn(mismatchedCmds);
    throw new Error('Mismatched commands');
}

for (const [cmdName, cmd] of Object.entries(cmds)) {
    try {
        const cmdPath = path.join(hestiaBinPath, cmdName);
        const bin = fs.readFileSync(cmdPath, 'utf8');

        let generatedBinComment = [
            `# info: ${cmd.info || ''}`,
            `# options: ${cmd.options || ''}`,
            `# labels: ${cmd.labels?.join(' ') || ''}`
        ].join('\n');

        if (cmd.examples?.length) {
            generatedBinComment += '\n#\n' + cmd.examples
            .map(example => (
                example
                .split('\n')
                .map((line, i) => `# ${!i ? 'example: ' : '         '}${line}`)
                .join('\n')
            ))
            .join('\n#\n');
        }

        if (cmd.desc) {
            generatedBinComment += '\n#\n' + cmd.desc.replace(/^/gm, '# ');
        }

        generatedBinComment += '\n';

        let rebuiltBin;
        if (cmd.php) {
            generatedBinComment = generatedBinComment.replace(/^#/gm, '//#');
            // replacement function to prevent unescaped $
            rebuiltBin = bin.replace(/(?<=^#!\/usr\/local\/hestia\/php\/bin\/php\n<\?php\n)(?:(?:\/\/#.*)\n)+/, () => generatedBinComment);
        } else {
            rebuiltBin = bin.replace(/(?<=^#!\/bin\/bash\n)(?:(?:#.*)\n)+/, () => generatedBinComment);
        }

        if (bin !== rebuiltBin) {
            console.log('Formatting:', cmdName);
            fs.writeFileSync(cmdPath, rebuiltBin, 'utf8');
        } else {
            console.log('Skipping:', cmdName);
        }
    } catch (e) {
        console.warn('Command:', cmdName);
        throw e;
    }
}