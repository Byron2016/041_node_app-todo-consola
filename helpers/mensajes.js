require('colors');


const mostrarMenu = () => {

    return new Promise( resolve => {
        
        // Es el menú principal que verá el usuario por consola.

        console.clear();
        console.log('=========================='.green);
        console.log('  Seleccione una opción'.green);
        console.log('==========================\n'.green);

        console.log(`${ '1.'.green } Crear tarea`);
        console.log(`${ '2.'.green } Listar tareas`);
        console.log(`${ '3.'.green } Listar tareas completadas`);
        console.log(`${ '4.'.green } Listar tareas pendientes`);
        console.log(`${ '5.'.green } Completar tarea(s)`);
        console.log(`${ '6.'.green } Borrar tarea`);
        console.log(`${ '0.'.green } Salir \n`);

        // readline es un paquete que ya viene con Node.js, no hay que instalar dependencias. El módulo readline proporciona una interfaz para leer datos de una secuencia legible (como process.stdin ) una línea a la vez. 
        // El 'input: process.stdin' lo que hace el pausar la aplicación a la espera de unos caracteres y el enter del usuario.
        // El 'output: process.stdout' sirve para mostrar un mensaje en consola cuando le pediomos algo al usuario.
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // El 'readline.question()' se usa cuando necesitamos el 'stdout', es decir, para mostrarle información al usuario con la pregunta. Esto se dispara con un callback, es decir una función que se va a ejecutar cuando termine el primer argumento.
        // 'readline.close()' sirve para cuando ya no estamos usando más el readline, si no lo ponemos, siempre va a aparecer el mensasje, aunque el usuario ya lo haya respondido.
        // El resolve(opt) es la resolución de la promesa, donde enviaré lo que sea que la persona escriba.

        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        })

    });

    

}

// Es practicamente un copia y pega de la constante 'readline' y el 'readline.question()' cambiando el mensaje que se muestra al usuario.

const pausa = () => {

    return new Promise( resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${ 'ENTER'.green } para continuar\n`, (opt) => {
            readline.close();
            resolve();
        })
    });
}


module.exports = {
    mostrarMenu,
    pausa
}