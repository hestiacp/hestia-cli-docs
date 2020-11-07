{% for cmdName, cmd in cmds %}
*******************************************************************
{{ cmdName }}
*******************************************************************

{% if cmd.info %}
**{{ cmd.info }}**
{% endif %}

**Label**:  {% for label in cmd.labels %} {{  '`'+(label | mdCode)+'`'  }} {% endfor %}


**Options**: {% for option in cmd.options %}{{ '–' if (option === 'NONE') else ('`' + (option | mdCode) + '`') }} {% endfor %}


{% if cmd.examples.length %}
**Examples**:
{% for example in cmd.examples %}

.. code-block:: {{ 'php' if cmd.php else 'bash' }}
   
  {{ example }}
   
{% endfor %}
{% endif %}

{{ cmd.desc.replace('*','`*`')  }}


{% endfor %}