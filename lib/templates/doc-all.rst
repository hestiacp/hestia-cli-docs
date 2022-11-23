{% for cmdName, cmd in cmds %}
*******************************************************************
{{ cmdName }}
*******************************************************************

{% if cmd.info %}
**{{ cmd.info }}**
{% endif %}

**Options**: {% for option in cmd.options %}{{ '–' if (option === 'NONE') else ('`' + (option | mdCode) + '`') }} {% endfor %}

{% if cmd.examples.length %}
**Examples**:
{% for example in cmd.examples %}

 {{ 'php' if cmd.php else 'bash' }}
   
  {{ example }}
   
{% endfor %}
{% endif %}

{{ cmd.desc }}

{% endfor %}