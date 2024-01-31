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

    // process Hestia comments
    const hestiaPath = fs.mkdtempSync(path.join(os.tmpdir(), 'hestiadocs-'));
    const hestiaBinPath = path.join(hestiaPath, 'bin');
    if(hestiaRepo != 'local'){
        const gitHestia = cp.spawnSync('git', [...'clone --depth 1'.split(' '), hestiaRepo, '--branch', hestiaBranch, hestiaPath], { stdio: 'inherit' });   
        if (gitHestia.status)
            process.exit(1);
            
    }else{
        const hestiaBranchBin = path.join(hestiaBranch, 'bin');
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
            let examplesSet;          
            
            const pattern = /(info|options|variable|example|note): (.*)(\w+)?\s*(?:\| ([^\n]+))?/g;
            let match;
            let info;
            let options;
            let examples = [];
            let variable = [];
            let note;
            //let desc;
            
            while ((match = pattern.exec(introBlock)) !== null) {
                if( match[1] == 'info')
                    info = match[2].trim();
                
                if( match[1] == 'options'){
                    options = match[2].trim();
                    
                    const processedOptions = options.split(/\s+/)
                    .filter(Boolean)
                    .map(option => option.replace(/-/g, '_').toUpperCase())
                    .map(option => option.replace('[NONE]', 'NONE'))
                    .join(' ');
                    
                    if (options !== processedOptions || !/^[A-Z0-9_\.\[\] ]+$/.test(options))
                        console.log(`${hestiaBinFile}: inconsistent options format`);
                    
                    options = processedOptions;
                }
                
                if( match[1] == 'example'){
                    examples.push(match[2].trim());
                }
                if( match[1] == 'variable'){
                    varsplit = match[2].split('|');
                   variable.push({name : varsplit[0].trim(),  value : varsplit[1].trim()});
                }
                if( match[1] == 'note')
                    note = match[2].trim();
            }
            
            const desc = introBlock.replace(/(info|options|variable|example|note):(.*)/g, '').replace(/^\s*$/gm, '');
            cmds[cmdName] = { info, options, examples, desc, note, variable };

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