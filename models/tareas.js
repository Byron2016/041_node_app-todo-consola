const Tarea = require('./tarea');

/**
 *  _listado:
 *      {  'uuid-123712-123123-2: { id:12, desc:asd,completadoeEN:92231 }  },
 */

class Tareas {

    // En '_listado' vamos a tener informacion sobre las tareas, como el id, fecha de completado, etc...

    _listado = {
        'abc': 123
    };

    //! Esta función será recorrida varias veces por forEach() en las funciones listadoCompleto(), listarPendientesCompletar() y toggleCompletadas().
    // Este getter transforma '_listado' en un array.

    get listadoArr() {

        const listado = [];
        // Object.keys() sirve para extraer cada una de las llaves que se encuentran en un objeto, en este caso this._listado. En este caso nos regresa un array de todas las llaves.
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;
    }


    constructor() {
        this._listado = {};
    }

    //! La función borrarTarea() la añadiremos al case '6' del switch case en app.js junto con listadoTareasBorrar() y confirmar() que se encuentran en inquirer.js

    borrarTarea( id = '' ) {

        if ( this._listado[id] ) {
            delete this._listado[id];
        }

    }

    //! La función cargarTareasFromArray() será llamada dentro de un condicional que se encuentra en la función main() en index.js y la pasaremos como argumento la función leerTareas() que se encuentra en inquirer.

    cargarTareasFromArray( tareas = [] ) {
        
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

//! La función crearTarea() la añadiremos al case '1' junto con la función leerInput() que se encuentra en inquirer.js 

    crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);

        // this._listado[tarea.id] = tarea; hace referencia al id que siempre va a generar uuid y que siempre va a ser único, si casualmente hubiera otra tarea con el mismo id, esta se sobreescribiría, pero eso nunca va a pasar ya que uuid son números únicos e irrepetibles.

        this._listado[tarea.id] = tarea;
    }

    //! La función listadoCompleto() la añadimos al case '2' en el switch case.

    listadoCompleto() {

        console.log();
        // La 'i' no hace falta definirla ya que el segundo argumento del forEach es un indice.
        this.listadoArr.forEach((tarea, i) => {

            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            // Operador ternario
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red;

            console.log(`${idx} ${ desc } :: ${estado}`);

        });
    }

    //! La función listarPendientesCompletadas(true) la añadiremos al case '3' en el swith case y la función listarPendientesCompletadas(false) la añadiremos al case '4'.

    listarPendientesCompletadas( completadas = true ) {

        console.log();
        let contador = 0;
        this.listadoArr.forEach( tarea => {

            const { desc, completadoEn } = tarea;
            // Operador ternario
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red;
            if ( completadas ) {
                // mostrar completadas. Si completadoEm tiene un valor, significa que la tarea está completada.
                if ( completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ completadoEn.green }`);
                }
            } else {
                // mostrar pendientes
                if ( !completadoEn ) {
                    contador += 1;
                    console.log(`${ (contador + '.').green } ${ desc } :: ${ estado }`);
                }
            }

        });     

    }

    //! La función toggleCompletadas() la añadiremos al case '5' en el switch case del di while en app.js junto con mostrarListadoChecklist(). 

    toggleCompletadas( ids = [] ) {

        ids.forEach( id => {

            const tarea = this._listado[id];
            if ( !tarea.completadoEn ) {
                // El método toISOString () devuelve un objeto de fecha como una cadena, utilizando el estándar ISO.
                tarea.completadoEn = new Date().toISOString()
            }

        });

        // Esta parte lo que hace es que si quitamos una tarea completada, esta pasará a estar en tareas no completadas, sino, seguiría estando en tareas completadas.
        this.listadoArr.forEach( tarea => {

            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null;
            }

        });
    }
}



module.exports = Tareas;
