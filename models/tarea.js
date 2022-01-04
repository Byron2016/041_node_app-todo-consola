const { v4: uudiv4 } = require('uuid');

// La clase tarea solo sirve para manejar una tarea de manera independiente, para manejar varias, lo crearé en el archivo tareas.

class Tarea {
    
    id = '';
    desc = '';
    completadoEn = null;

    // El constructor es lo que se va a ejecutar cuando creemos una nueva instancia de nuestra tarea.

    constructor( desc ) {

        this.id = uudiv4();
        this.desc = desc;
        this.completadoEn = null;

    }

}



module.exports = Tarea;
