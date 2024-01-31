# CLI Reference

::: info
Options between square brackets `[` and `]` are optional and not required. For example [FORMAT]
:::

{% for cmdName, cmd in cmds %}
## {{ cmdName }}

[Source](https://github.com/hestiacp/hestiacp/blob/release/bin/{{cmdName}})

{% if cmd.info %}
{{ cmd.info }}
{% endif %}

**Options**: {% for option in cmd.options %}{{ '–' if (option === 'NONE') else ('`' + (option | mdCode) + '`') }} {% endfor %}

{% if cmd.variable.length %}

{% for variable in cmd.variable %}
`{{ variable.name}}` {{ variable.value}}<br />
{% endfor %}
{% endif %}

{% if cmd.examples.length %}

**Examples**:
{% for example in cmd.examples %}
```{{ 'php' if cmd.php else 'bash' }}
{{ example }}
```
{% endfor %}

{% endif %}

{{ cmd.desc }}

{% if cmd.note %}
::: warning
 {{ cmd.note }}
:::

{% endif %}

{% endfor %}