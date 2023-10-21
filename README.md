# hestia-cli-docs

Provides pre-generated Hestia CLI documentation, as well as tools to generate it from annotation comments and keep it in a good shape.

## Documentation

**Ready-to-use documentation for Hestia CLI commands is available [online](https://hestiacp.com/docs/reference/cli.html)**.

If you are here to browse it, you don't need any of the below.

## Install

Supports Node.js 14 or higher.

```
git clone https://github.com/hestiacp/hestia-cli-docs
cd hestia-cli-docs
npm i
```

## Use

### Generate command annotations

Auto-format comments in Hestia commands, label ones that are unique to Hestia, merge examples and categories from Hestia older documentation. This may be destructive for a branch that has been already edited:

```
npm run format-cmds -- --legacy path/to/local/hestiacp/bin https://github.com/hestiacp/hestiacp branch-that-contains-unformatted-comments
```

### Update command annotations

Auto-format comments in Hestia command:

```
npm run format-cmds -- path/to/local/hestiacp/bin https://github.com/hestiacp/hestiacp branch-that-contains-formatted-comments
```

### Check command annotations

Check comments in Hestia commands for potential problems and output hestia-cmds.json cache that can be used by other commands or externally processed:

```
npm run check-cmds -- --output https://github.com/hestiacp/hestiacp branch-that-contains-unformatted-comments
```

### Generate CLI documentation

Generate one-page documentation for Hestia CLI commands, use hestia-cmds.json cache if available
```
npm run generate-docs -- https://github.com/hestiacp/hestiacp branch-that-contains-formatted-comments
```

## Format

The toolset detects inconsistencies in command annotation and keeps the format strict. Options closely follow the format that is used in script body.

 This allows to simply and reliably parse annotations and use them to automatically generate the documentation:

- The annotation goes immediately after shebang
- No unnecessary duplicate, leading and trailing whitespaces unless specified, all lines start with `#` and a space, no space in empty line
- A comment after the description shouldn't be a part of the annotation
- PHP scripts follow the same format but have mandatory `<?php` tag and PHP `//` comment before `#` to match the syntax
- `info`, `options` and `labels` fields are mandatory and go in this order, 1 space after colon in case a field is filled
- `info` is concise, uncapitalized, doesn't end with a dot
- `options` are upper- and snake-cased, separated with 1 space, optional are wrapped with `[]`
- `labels` allow to group scripts, lower- and kebab-cased, delimited with 1 space
- `example` fields are optional and numerous, delimited and separated with empty line, multiline examples can be aligned, descriptions can contain additional `#` to be distinguished from a command
- the description is mandatory, delimited with empty line and consists of sentences wrapped for 80 width limit, each line is prepended with `#`

### Examples

Bash script with variable options and an example (`v-add-fs-archive`):
```bash
#!/bin/bash
# info: archive directory
# options: USER ARCHIVE SOURCE [SOURCE...]
# labels:
#
# example: v-add-fs-archive admin archive.tar readme.txt
#
# The function creates tar archive
…
```

Bash script with multiline examples (`v-change-sys-db-alias`):
```bash
#!/bin/bash
# info: change phpmyadmin/phppgadmin alias url
# options: TYPE ALIAS
# labels: hestia
#
# example: v-change-sys-db-alias pma phpmyadmin
#          # Sets phpMyAdmin alias to phpmyadmin
#
# example: v-change-sys-db-alias pga phppgadmin
#          # Sets phpPgAdmin alias to phppgadmin
#
# This function changes the database editor url in
# apache2 or nginx configuration.
…
```

PHP script (`v-generate-password-hash`):
```php
#!/usr/local/hestia/php/bin/php
<?php
//# info: generate password hash
//# options: HASH_METHOD SALT PASSWORD
//# labels: panel
//#
//# example: v-generate-password-hash sha-512 rAnDom_string yourPassWord
//#
//# The function generates password hash

// Checking arguments
…
```
