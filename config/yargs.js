const descripcion = {
    demand: true,
    alias: 'd',
    description: 'Descripción de la tarea por hacer.'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Cambia el estado de la tarea por hacer a completado.'
}



const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer.', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea por hacer.', {
        descripcion,
        completado
    })
    .command('listar', 'Lista todas las tareas.', {
        completado
    })
    .command('borrar', 'Borra una tarea por hacer.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}