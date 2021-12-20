require('colors');

const {guardarDB,
    leerDB
} = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerInput
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const tareasDB = leerDB();

if (tareasDB){//Cargar tareas
    tareas.cargarTareasFromArray()
}
await pausa();


const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    do {
        //Imprimir el menú
        opt = await inquirerMenu();
        console.log({ opt });

        switch (opt) {
            case '1':
                //Crear opción
                const desc = await leerInput('Descripción:')
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoArr);
                break;
        }

        guardarDB(tareas.listadoArr);

        await pausa();

    } while (opt !== '0');

    // pausa()
};

main();