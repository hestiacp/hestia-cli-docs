const GfmEscape = require('gfm-escape');
const nunjucks = require('nunjucks');
const path = require('path');


const mdEscaper = new GfmEscape();
const mdCodeEscaper = new GfmEscape({}, 'codeSpan');
const mdLinkTitleEscaper = new GfmEscape({}, 'linkTitle');

nunjucks
.configure(path.join(__dirname, 'templates'), {
	autoescape: false,
	noCache: true,
	trimBlocks: true
})
.addFilter('md', str => mdEscaper.escape(str))
.addFilter('mdCode', str => mdCodeEscaper.escape(str))
.addFilter('mdLinkTitle', str => mdLinkTitleEscaper.escape(str));

const generateAllCmdsDoc = (cmds) => {
	for (const [cmdName, cmd] of Object.entries(cmds)) {
		cmd.options = cmd.options?.split(' ');
		cmd.desc = cmd.desc?.split(/ *\n */).join(' ');
	}

	return nunjucks.render('doc-all.rst', { cmds });
};

exports.generateAllCmdsDoc = generateAllCmdsDoc;
