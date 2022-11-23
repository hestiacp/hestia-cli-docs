# CLI Reference

{% for cmdName, cmd in cmds %}
## {{ cmdName }}

{% if cmd.info %}
{{ cmd.info }}
{% endif %}

**Options**: {% for option in cmd.options %}{{ '–' if (option === 'NONE') else ('`' + (option | mdCode) + '`') }} {% endfor %}

{% if cmd.examples.length %}

**Examples**:
```{{ 'php' if cmd.php else 'bash' }}
{% for example in cmd.examples %}
    {{ example }}
{% endfor %}
```
{% endif %}

{{ cmd.desc }}

{% endfor %}