import inquirer from 'inquirer'
import colors from 'colors'

const preguntas = [
  {
    type: 'list',
    name: 'opcion',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1.'.brightGreen} Crear tarea`,
      },
      {
        value: '2',
        name: `${'2.'.brightGreen} Ver tareas`,
      },
      {
        value: '3',
        name: `${'3.'.brightGreen} Ver tareas completadas`,
      },
      {
        value: '4',
        name: `${'4.'.brightGreen} Ver tareas pendientes`,
      },
      {
        value: '5',
        name: `${'5.'.brightGreen} Completar tarea(s)`,
      },
      {
        value: '6',
        name: `${'6.'.brightGreen} Borrar tarea`,
      },
      {
        value: '0',
        name: `${'0.'.brightGreen} Salir`,
      },
    ],
  },
]

const inquirerMenu = async () => {
  console.clear()
  console.log('=========================='.brightGreen)
  console.log('  Seleccione una opción'.brightMagenta)
  console.log('==========================\n'.brightGreen)

  const { opcion } = await inquirer.prompt(preguntas)

  return opcion
}

const pausa = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.brightGreen} para continuar`,
    },
  ]

  console.log('\n')

  await inquirer.prompt(question)
}

const leerInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,

      validate(value) {
        if (value.length === 0) {
          return 'Por favor ingrese un valor'
        }
        return true
      },
    },
  ]

  const { desc } = await inquirer.prompt(question)
  return desc
}

const listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.brightGreen

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
    }
  })

  choices.unshift({
    value: '0',
    name: '0.'.brightGreen + ' Cancelar',
  })

  const preguntas = [
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices,
    },
  ]
  const { id } = await inquirer.prompt(preguntas)
  return id
}

const confirmar = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ]

  const { ok } = await inquirer.prompt(question)
  return ok
}

const mostrarListadoChecklist = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.brightGreen

    return {
      value: tarea.id,
      name: `${idx} ${tarea.desc}`,
      checked: !!tarea.completadoEn,
    }
  })

  const pregunta = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Selecciones',
      choices,
    },
  ]

  const { ids } = await inquirer.prompt(pregunta)
  return ids
}

export {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
}