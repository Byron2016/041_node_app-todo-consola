const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${ '1.'.brightGreen } Crear tarea`
            },
            {
                value: '2',
                name: `${ '2.'.brightGreen } Ver tareas`
            },
            {
                value: '3',
                name: `${ '3.'.brightGreen } Ver tareas completadas`
            },
            {
                value: '4',
                name: `${ '4.'.brightGreen } Ver tareas pendientes`
            },
            {
                value: '5',
                name: `${ '5.'.brightGreen } Completar tarea(s)`
            },
            {
                value: '6',
                name: `${ '6.'.brightGreen } Borrar tarea`
            },
            {
                value: '0',
                name: `${ '0.'.brightGreen } Salir`
            },
            
        ]
    }
];

//! La función inquirerMenu() la añadiremos al do while en app.js para imprimir el menú de forma constante. 

const inquirerMenu = async() => {

    console.clear();
    console.log('=========================='.brightGreen);
    console.log('  Seleccione una opción'.brightMagenta);
    console.log('==========================\n'.brightGreen);

    // Aquí insertamos la constante 'preguntas' como argumento en el prompt.

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

// La constante 'pausa' sirve para que cuando seleccionamos una opción poder ver lo que hemos seleccionado (Crear tarea, tareas, etc...) y realizar la acción correspondiente.
//! Añadiremos la constante pausa() en el do while de app.js fuera del switch case.

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.brightGreen } para continuar`
        }
    ];

    console.log('\n');

    // Con este prompt mostramos la pregunta de la constante question.

    await inquirer.prompt(question);
}

//! La función leerInput() la añadimos al case '1' en el switch case en app.js junto con la función crearTarea() que se encuentra en tareas.js

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,

            // En la documentación de inquirer podemos ver que validate() sirve para forzar a una persona a poner un valor, si no lo pone, saldrá un mensaje indicando que ingrese un valor. El parámetro value hace referencia a lo que escribe la persona. 

            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    // Nos interesa la descripción de la constante question, por eso hacemos una desestructuración de dicha constante.

    const { desc } = await inquirer.prompt(question);
    return desc;
}

//! La función listadoTareasBorrar() la añadiremos al case '6' en el switch case junto con confirmar() que se encuentra en inquirer.js y borrarTarea() que se encuentra en tareas.js

const listadoTareasBorrar = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}.`.brightGreen;

        return {
            value: tarea.id,
            name:  `${ idx } ${ tarea.desc }`
        }
    });

    // Unshift añade un elemento al inicio del arrego, en este caso añade el valor cancelar.

    choices.unshift({
        value: '0',
        name: '0.'.brightGreen + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

//! La función confirmar() la añadiremos al case '6' del switch case en app.js junto con listadoTareasBorrar() que se encuentra en inquirer.js y borrarTarea() que se encuentra en tareas.js
// La función confirmar la usaremos en borrarTarea(), pero se podría reutilizar para otras cosas.
const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    // Ok es un booleano, si recibe true borrará la tarea, si recibe false no la borrará.
    
    const { ok } = await inquirer.prompt(question);
    return ok;
}   

//! La función mostrarListadoChecklist() la añadiremos al case '5' junto con toggleCompletadas() que se encuentra en tareas.js 

const mostrarListadoChecklist = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}.`.brightGreen;

        return {
            value: tarea.id,
            name:  `${ idx } ${ tarea.desc }`,
            // Operador ternario
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}



module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}