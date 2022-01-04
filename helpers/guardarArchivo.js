const fs = require('fs');

// En la constante archivo indicamos el directorio donde vamos a crear nuestro json, la carpeta 'db' tiene que existir. Se lo pasaremos como argumento al fs.writeFileSync().

const archivo = './db/data.json';

//! La función guardarDB() la ejecutaremos en el do while del app.js fuera del switch case a la cual le pasaremos como argumento tareas.listadoArr.

const guardarDB = ( data ) => {
    // El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON, opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo.
    // El primer argumento de fs.writeFileSync() es para la ubicación y el nombre del archivo que estamos creando, y el segundo argumento es para añadir datos a ese archivo.
    fs.writeFileSync( archivo, JSON.stringify(data) );
}

//! La función leerDB() la guardaremos como una constante dentro de la función main() en app.js y se la pasaremos como argumento a un condicional, que a vez pasaremos como argumento a la función cargarTareasFromArray() que llamaremos dentro de ese condicional y esta se encuentra en tareas.js.
// La función leerDB() sirve para leer el archivo json que tengamos de una sesión anterior, sin esta función, cada vez que reiniciemos la app, esta no tendrá acceso a las tareas ya creadas.

const leerDB = () => {
    
    // Este condicional sirve para comprobar si el archivo existe. Si no existe, nos retornal null y si existe, pasaría a ejecutar las constantes info y data.
    if( !fs.existsSync(archivo) ){
        return null;
    }
    
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    // JSON.parse() es el proceso contrario al stringify, lo usaremos para que al leerlo, este nos devuelva un array y no un string.
    const data = JSON.parse( info );

    // console.log(data);

    return data;
}



module.exports = {
    guardarDB,
    leerDB
}