{% for cmdName, cmd in cmds %}
*******************************************************************
{{ cmdName }}
*******************************************************************

{% if cmd.info %}
**{{ cmd.info }}**
{% endif %}

**Options**: {% for option in cmd.options %}{{ 'none' if (option === 'NONE') else ('`' + (option | mdCode) + '`') }} {% endfor %}

{% if cmd.examples.length %}
**Examples**:
{% for example in cmd.examples %}

.. code-block:: {{ 'php' if cmd.php else 'bash' }}
   
  {{ example }}
   
{% endfor %}
{% endif %}

{{ cmd.desc  }}

{% endfor %}
