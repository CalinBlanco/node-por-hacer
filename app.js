// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        // console.log(argv.completado);
        let listado = porHacer.getListado(argv.completado);
        if (listado.length != 0) {
            for (const tarea of listado) {
                console.log('========Por Hacer========'.green);
                console.log('Tarea:  ', tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('========================='.green);
            }
        } else {
            console.log('No hay tareas por hacer');
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log(`La tarea "${argv.descripcion}" fue borrado.`);
        } else {
            console.log(`No fue posible borrar "${argv.descripcion}".`);
        }
        break;

    default:
        console.log('Comando no reconocido');
        break;
}