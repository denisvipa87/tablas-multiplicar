
import yargs, { boolean, option } from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs( hideBin( process.argv ) )
    .option( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base para la tabla de multiplicar'
    })
    .option( 'l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Limite tabla de multiplicar'
    })
    .option( 's', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla de multiplicar'
    }).
    option( 'n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'Nombre del archivo'
    })
    .option( 'd', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'Directorio de Destino'
    })
    .check(( argv, options )=>{

        if( argv.b <= 0 ) throw new Error('La base tiene que ser un número positivo');

        return true;
    })
    .parseSync();