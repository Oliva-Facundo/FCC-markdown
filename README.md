Historia de Usuario #1: Puedo ver un elemento textarea con su correspondiente id="editor".

Historia de Usuario #2: Puedo ver un elemento con un id="preview" correspondiente.

Historia de usuario #3: Cuando introduzco texto en el elemento #editor, el elemento #preview se actualiza a medida que escribo para mostrar el contenido del área de texto.

Historia de usuario #4: Cuando introduzco markdown con sabor a GitHub en el elemento #editor, el texto se renderiza como HTML en el elemento #preview a medida que escribo (SUGERENCIA: No necesitas analizar Markdown tú mismo - puedes importar la librería Marked para esto: https://cdnjs.com/libraries/marked).

Historia de usuario nº 5: Cuando mi previsualizador de markdown se carga por primera vez, el texto por defecto en el campo #editor debe contener markdown válido que represente al menos uno de cada uno de los siguientes elementos: un elemento de encabezado (tamaño H1), un elemento de subencabezado (tamaño H2), un enlace, código en línea, un bloque de código, un elemento de lista, una cita de bloque, una imagen y texto en negrita.

Historia de usuario nº 6: Cuando mi previsualizador de markdown se carga por primera vez, el markdown por defecto en el campo #editor debería mostrarse como HTML en el elemento #preview.

Bonificación opcional (no es necesario superar esta prueba): Mi previsualizador de markdown interpreta los retornos de carro y los representa como elementos br (salto de línea).