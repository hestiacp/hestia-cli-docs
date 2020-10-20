# Hestia CLI Documentation

## Labels

Hint: use Ctrl+F to find them on page

- `{hestia}`: commands that are unique to Hestia and not inherited from Vesta
- `{panel}`: panel-specific commands
- `{dns}`: DNS-specific commands
- `{mail}`: mail-specific commands

## Contents

Hint: command short descriptions are displayed on hover

{% for cmdName, cmd in cmds %}
- [{{ cmdName }}](#{{ cmdName }} "{{ cmd.info | mdLinkTitle }}") {% for label in cmd.labels %}`{{ '{' + (label | mdCode) + '}' }}` {% endfor %}

{% endfor %}

## Commands


{% for cmdName, cmd in cmds %}
### {{ cmdName }}
{% if cmd.labels.length %}
{% for label in cmd.labels %}`{{ '{' + (label | mdCode) + '}' }}` {% endfor %}
{% endif %}

{% if cmd.info %}
*{{ cmd.info | md }}*
{% endif %}

**Options**: {% for option in cmd.options %}{{ '–' if (option === 'NONE') else ('`' + (option | mdCode) + '`') }} {% endfor %}


{% if cmd.examples.length %}
**Examples**:
{% for example in cmd.examples %}
```{{ 'php' if cmd.php else 'bash' }}
{{ example | mdCode }}
```
{% endfor %}
{% endif %}

{{ cmd.desc | md }}

{% endfor %}