{% for cmdName, cmd in cmds %}
### {{ cmdName }} {% for label in cmd.labels %}`{{ '{' + (label | mdCode) + '}' }}` {% endfor %}

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