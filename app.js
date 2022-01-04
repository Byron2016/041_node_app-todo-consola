// La línea require('colors'); significa que estoy realizando la importación del paquete colors.

require('colors');

// La desestructuración de estas constantes significa que estoy sacando estas funciones o objetos del directorio al que hacemos el require.

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
} = require('./helpers/inquirer');

// La constante Tareas importa lo que exporte el alchivo del require.

const Tareas = require('./models/tareas');

// La función main() es la que se está ejecutando abajo del todo.

const main = async() => {

    // Lo que se encuentre fuera del ciclo do while, solo se va a ejecutar una vez ya que se encuentra fuera del ciclo.

    let opt = '';

    // La constante tareas hace una instancia a Tareas().

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if ( tareasDB ) { // cargar tareas
        tareas.cargarTareasFromArray( tareasDB );
    }

    do {
        // Imprimir el menú y retorna una opción.
        opt = await inquirerMenu();

        switch (opt) {
            case '1': // crear opcion
                const desc = await leerInput('Descripción:');
                tareas.crearTarea( desc );
            break;

            case '2':
                tareas.listadoCompleto();
            break;
            
            case '3': // listar completadas
                tareas.listarPendientesCompletadas(true);
            break;

            case '4': // listar pendientes
                tareas.listarPendientesCompletadas(false);
            break;

            case '5': // completado | pendiente
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletadas( ids );
            break;
                       
            case '6': // Borrar
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if ( id !== '0' ) {
                    const ok = await confirmar('¿Está seguro?');
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                    }
                }
            break;
        
        }


        guardarDB( tareas.listadoArr );

        await pausa();

    } while( opt !== '0' );


    // pausa();

}


main();

