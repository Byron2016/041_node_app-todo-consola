# 💻Aplicación TO-DO de consola interactiva realizada con node.js💻

## 🧑🏻‍💻 Aplicación realizada para aprender el funcionamiento de node.js a la hora de realizar una app sencilla.
</br>

## 📌 Dependencias:
- 🌈 Colors:
Sirve para camviar los colores de elementos de la consola.
Para instalarlo utilizamos:
```
npm install colors
```
Documentación: https://www.npmjs.com/package/colors

- ⌨️ Inquirer:
Es una interfaz de línea de comandos facilmente integrable para node.js.
Para instalarlo utilizamos:
```
npm install inquirer
```
Documentación: https://www.npmjs.com/package/inquirer

- 🔐 Uuid:
Un identificador único universar o univerlally unic identifier (uuid) es un número de 16 bytes (128bits).
Para instalarlo utilizamos:
```
npm install uuid
```
Documentación: https://www.npmjs.com/package/uuid


## 📌 Pasos para crear la app (Seguir este orden para entender el funcionamiento):

- En primer lugar instalamos las dependencias y creamos la estructura del proyecto.

(La parte de mensajes.js no va a estar en la aplicación final, simplemente es para entender el funcionamiento y las necesidades de la aplicación y ver como se hace manualmente la parte del inquirer, marcaré la parte con dos guiones - -).

- - En la carpeta 'mensajes.js' crearemos el require('colors'); y la función mostrarMenu.

- - Creamos el requerimiento de readline, un modulo que ya viene integrado en Node.js que proporciona una interfaz para leer datos de una secuencia (como process.stdin) una línea a la vez.
Documentación de readline: https://nodejs.org/api/readline.html

- - Lo siguiente que hacemos es crear la función de pausa en el mismo archivo de mensajes. (Practicamente es copiar y pegar la constante readline y el readline.question y cambiar el mensaje).

- - Exportar las funciones mostrarmenu y pausa y las importamos en app.js.

- - Crear el do while en 'app.js' para repetir el menú de forma infinita (Cuando la opcion sea 0, salimos del bucle).

- En el documento 'inquirer.js' creamos la constante inquirerMenu.

- Exportar el inquirer menu.

- Crear la constante 'preguntas', que es lo que vamos a pasar en el prompt (Lo que hace el prompt lo podemos ver en la documentación).

- Importar el inquirer menu en app.js.

- Crear la función pausa en el archivo inquirer.

- Exportar pausa de inquirer.js e importarlo en app.js

- Requerimos 'uuid' en tarea.js

- Añadir la clase Tarea a tarea.js

- Exportar 'Tarea' (Sin llaves, ya que sino tendriamos que importarlo y hacer la desestructuración de la tarea).

- Importar 'Tarea' al archivo tareas y al archivo app.js.

- Crear clase Tareas.

- Exportar 'Tareas' (Sin llaves) e importarla en app.js

- Crear la instancia de 'Tareas' en app.js

- Crear método de crearTarea en tareas.js

- Crear función 'leerImput' en inquirer.js

- Exportar leer imput e importarlo en app.js

- Hacer el caso 1 del swich case en el do while de app.js con la función de leerInput().

- Añadir el método de crearTarea() al switch case '1'.

- Crear el getter de listadoArr() en tareas.js

(En este punto vamos a crear no necesario para guardar las tareas en un archivo json. Para ello tenemos que tener creada la carpeta 'db' y el archovo 'guardarArchivo.js).

- Crear la función guardarDB() en guardarArchivo.js

- Exportar guardarDB e importarlo en app.js

- Añadir la función guardarDB() al do while despues del switch case pasandole como argumento tareas.listadoArr.

- Crear la función leerDB() en guardarArchivo.js

- Exportar leerDB() e importarlo a app.js.

- Ejecutar la función leerDB a la función main(), fuera del do while.

- Crear el método cargarTareasFromArray() en tareas.js.

- Crear el condicional donde añadamos la función de cargarTareasFromArray() en app.js dentro de la función main() y fuera del do while.

- Crear el método listadoCompleto() en tareas.js

- Crear el método listarPendientesCompletadas()

- Añadir los métodos listadoCompleto() al case '2', listadoPendientesCompletadas(true) al case '3' y listadoPendientesCompletadas(false) al case '4' en el switch case de index.js

- Crear el método borrarTarea() en tareas.js

- Crear la función listadoTareasBorrar() en inquirer.js

- Exportar listadoTareasBorrar() e importarlo en app.js

- Crear la función confirmar() en inquirer.js

- Exportar confirmar() e importarlo en app.js

- Añadir listadoTareasBorrar al case '6' (Dejar el espacio para el 5 que haremos mas adelante).

- Crear función mostrarListadoChecklist() en inquirer.js

- Exportar mostrarListadoChecklist() e importarlo en index.js

- Crear el método toggleCompletadas() en tareas.js

- Hacer el case '5' en el switch case.