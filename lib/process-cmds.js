const cp = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');


function processCmds({ hestiaRepo, hestiaBranch, cache = false, checkOldDocs = true, checkVesta = true } = {}) {
    let cmds;

    if (cache && fs.existsSync(path.join(process.cwd(), 'hestia-cmds.json'))) {
        console.log(`Reusing hestia-cmds.json`);
        cmds = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'hestia-cmds.json')));

        return cmds;
    }
    
    // process Heistia old docs
    const oldCmds = {};
    if (checkOldDocs) {
        const hestiaDocsPath = fs.mkdtempSync(path.join(os.tmpdir(), 'hestiadocs-'));
        const gitHestiaDocs = cp.spawnSync('git', [...'clone --depth 1 https://github.com/hestiacp/hestiacp-docs'.split(' '), hestiaDocsPath], { stdio: 'inherit' });

        if (gitHestiaDocs.status)
            process.exit(1);

        const hestiaCmdDocsPath = path.join(hestiaDocsPath, 'cli_commands');
        const hestiaDocFiles = fs.readdirSync(hestiaCmdDocsPath).filter(file => /\.rst/.test(file));
        for (const hestiaDocFile of hestiaDocFiles) {
            try {
                const doc = fs.readFileSync(path.join(hestiaCmdDocsPath, hestiaDocFile), 'utf8');
                let [, label, content] = doc.match(/###+\n(\w+) .+?\n###+\n([\s\S]+)/);
                for (const [, cmdName, cmdSection] of content.matchAll(/[*]{3,}\n(v-[\w-]+)\n[*]{3,}([\s\S]+?)(?=[*]{3}|$)/g)) {
                    try {				
                        let examples;
                        // formatting is inconsistent
                        let [, example = ''] =  cmdSection.match(/[*]{2}Example usage[*]{2}:? *`(.+)`/i) || [];
                        // remove dupe spaces in first line
                        example = example
                        .split('\n')
                        .map((line, i) => i ? line : line.replace(/ +/g, ' '))
                        .join('\n')
                        .trim();

                        if (example)
                            examples = [example];

                        label = label.toLowerCase();
                        oldCmds[cmdName] = { labels: [label], examples };
                    } catch (e) {
                        console.warn('Hestia doc section:', cmdName);
                        throw e;
                    }		
                };
            } catch (e) {
                console.warn('Hestia doc:', hestiaDocFile);
                throw e;
            }		
        }

        fs.rmSync(hestiaDocsPath, { recursive: true });
    }

    // compare Hestia set of commands with Vesta for `hestia` label
    const vestaCmds = {};
    if (checkVesta) {
        const vestaPath = fs.mkdtempSync(path.join(os.tmpdir(), 'hestiadocs-'));
        const gitVesta = cp.spawnSync('git', [...'clone --depth 1 https://github.com/serghey-rodin/vesta'.split(' '), vestaPath], { stdio: 'inherit' });

        if (gitVesta.status)
            process.exit(1);

        const vestaBinPath = path.join(vestaPath, 'bin');
        const vestaBinFiles = fs.readdirSync(vestaBinPath).filter(file => /^v-[\w-]+$/.test(file));
        for (const vestaBinFile of vestaBinFiles) {
            const cmdName = vestaBinFile.replace('vesta', 'hestia');
            vestaCmds[cmdName] = { ...vestaCmds[cmdName] };
            vestaCmds[cmdName].labels = ['vesta'];
        }

        fs.rmSync(vestaPath, { recursive: true });
    }

    // process Hestia comments
    const hestiaPath = fs.mkdtempSync(path.join(os.tmpdir(), 'hestiadocs-'));
    const hestiaBinPath = path.join(hestiaPath, 'bin');
    if(hestiaRepo != 'local'){
        const gitHestiaDocs = cp.spawnSync('git', [...'clone --depth 1 https://github.com/hestiacp/hestiacp-docs'.split(' '), hestiaPath], { stdio: 'inherit' });    
        if (gitHestia.status)
            process.exit(1);
        
        
    }else{
        const hestiaBranchBin = path.join(hestiaBranch, 'bin');
        console.log(hestiaBinPath);
        const gitHestiaDocs = fs.cpSync(hestiaBranchBin, hestiaBinPath, { recursive: true });
    }
    
    cmds = {};
    const hestiaBinFiles = fs.readdirSync(hestiaBinPath).filter(file => /^v-[\w-]+$/.test(file));
    for (const hestiaBinFile of hestiaBinFiles) {
        const cmdName = hestiaBinFile;
        try {
            const bin = fs.readFileSync(path.join(hestiaBinPath, hestiaBinFile), 'utf8');

            const [, shebang, content] = bin.match(/^(#!.+)\n([\s\S]+)/);
            let introBlock;
            let isPhp;

            // Not all descriptions are separated with empty # (v-add-sys-theme)
            if (shebang === '#!/usr/local/hestia/php/bin/php') {
                // v-generate-password-hash
                isPhp = true;
                [, introBlock] = content.match(/^<\?php\n((?:(?:\/\/#|\/\/# .*|)\n)+)/);
                introBlock = introBlock.replace(/^\/\//gm, '');
            } else if (shebang === '#!/bin/bash') {
                [, introBlock] = content.match(/^((?:(?:#|# .*|)\n)+)/);
            } else {
                throw new Error('Unknown interpreter');
            }

            if (/^(?!#)/gm.test(introBlock.trimEnd())) {
                console.log(`${hestiaBinFile}: missing # on empty line`);
            }

            introBlock = introBlock.replace(/^#(?: | *$)/gm, '').trimStart();

            let [, info, options, labelsList, othersBlock] = introBlock.match(/^(?:info: +(.*)\n|)(?:options: +(.*)\n|)(?:labels: ?(.*)\n|)([\s\S]*)/);
            // May contain multiple example blocks (v-change-sys-db-alias) before description or extra comments after (v-search-command)

            if (info)
                info = info.trim();

            if (options) {
                options = options.trim();
                
                const processedOptions = options.split(/\s+/)
                .filter(Boolean)
                .map(option => option.replace(/-/g, '_').toUpperCase())
                .map(option => option.replace('[NONE]', 'NONE'))
                .join(' ');

                if (options !== processedOptions || !/^[A-Z0-9_\.\[\] ]+$/.test(options))
                    console.log(`${hestiaBinFile}: inconsistent options format`);

                options = processedOptions;
            }

            // check if options are up-to-date
            // based on validated args
            const optionsCount = (options !== 'NONE' && options?.split(' ').length) || 0;			
            let usedArgsCount = 0;
            if (/args_usage=('[^\$\n]*'|"[^\$\n]*")/.test(content)) {
                usedArgsCount = content.match(/args_usage=('[^\$\n]*'|"[^\$\n]*")/)[1]
                .replace(/^['"](.*)['"]$/, '$1').trim()
                .split(/\s+/).length;
            } else if (/check_args .+('[^\$\n]*'|"[^\$\n]*") *\n/.test(content)) {
                usedArgsCount = content.match(/check_args .+('[^\$\n]*'|"[^\$\n]*") *\n/)[1]
                .replace(/^['"](.*)['"]$/, '$1').trim()
                .split(/\s+/).length;
            }
            // based on directly refered args
            const referedArgs = [...content.matchAll(isPhp ? /\$argv\[(\d+)\]/g : /=\${?(\d+)/g)].map(([, argNum]) => +argNum);
            usedArgsCount = Math.max(usedArgsCount, ...referedArgs);

            // based on wildcard arg
            if (!optionsCount && !usedArgsCount && / \$#/.test(content)) {
                usedArgsCount = Infinity;
            }

            if (optionsCount !== usedArgsCount)
                console.log(`${hestiaBinFile}: possible options mismatch, ${optionsCount}/${usedArgsCount}`);

            if (!info) {
                console.log(`${hestiaBinFile}: no info`);
            }

            if (!options) {
                console.log(`${hestiaBinFile}: no options`);
            }

            let examplesSet = new Set(oldCmds[cmdName]?.examples);
            let desc;
            let isExtraComment;

            if (othersBlock) {
                // const commentBlocks = othersBlock.replace(/^ *(.*?) */gm, '$1').replace(/^\n*([\s\S]*?)\n*$/, '$1').split(/\n\n+/);
                const commentBlocks = othersBlock.replace(/^ *(.*?) */gm, '$1').replace(/^\n*([\s\S]*?)\n*$/, '$1').split(/\n\n+/);

                for (const commentBlock of commentBlocks) {
                    if (desc != null) {
                        isExtraComment = true;
                    } else if (/^example:/.test(commentBlock)) {
                        let [, example] = commentBlock.match(/^example: +([\s\S]+)/);
                        
                        // remove dupe spaces in first line
                        example = example
                        .split('\n')
                        .map((line, i) => i ? line : line.replace(/ +/g, ' '))
                        .join('\n')
                        .trim();
                        
                        examplesSet.add(example);
                        
                    } else {
                        desc = commentBlock.replace(/ +/g, ' ').trim();
                    }
                }
            }

            if (!desc) {
                console.log(`${hestiaBinFile}: no description`);
            } else if (/(?<![.,:!?]) *\n *[A-Z]/.test(desc)) {
                console.log(`${hestiaBinFile}: description punctuation missing:`);
            }

            if (isExtraComment) {
                console.log(`${hestiaBinFile}: extra comments`);
            }

            const ownLabels = labelsList ? labelsList.trim().toLowerCase().split(/ +/) : [];
            const labelsSet = new Set([
                ...(oldCmds[cmdName]?.labels || []),
                ...(vestaCmds[cmdName]?.labels || []),
                ...ownLabels
            ]);
            // not useful
            labelsSet.delete('common');

            // specific to Hestia
            if (checkVesta) {
                if (labelsSet.has('vesta')) {
                    labelsSet.delete('vesta')
                } else {
                    labelsSet.add('hestia');
                }
            }

            let labels;
            if (labelsSet.size)
                labels = [...labelsSet].sort();

            let examples;

            for (const example of examplesSet) {
                // no useless examples
                if (example === cmdName)
                    examplesSet.delete(example);
                else if (!example.startsWith(cmdName))
                    console.log(`${hestiaBinFile}: wrong example`);				
            }
            if (examplesSet.size)
                examples = [...examplesSet];

            cmds[cmdName] = { info, options, labels, examples, desc };

            if (isPhp) {
                cmds[cmdName].php = true;
            }
        } catch (e) {
            console.warn('Hestia bin:', hestiaBinFile);
            throw e;
        }
    }

    fs.rmSync(hestiaPath, { recursive: true });

    return cmds;
}

exports.processCmds = processCmds;