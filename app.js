//requireds
//tipos de requireds 3
//const fs = require('fs'); //1) viene propio en la documentacion de node, se difine y listo
// const fs = require('express');//no viene propio en node es un paquete que se instala y se utiliza despues (como una libreria de un externo)
// const fs = require('./fs');//arcivos que nosotros creamos en el proyecto con el path de la ruta del archivo

//se puede usar de esta manera pero hay una mas elegante con destructuracion que es la que se usa aca
//const multiplicar = require('./multiplicar/multiplicar');

/* manera antigua, todo se mudo al config/yargs.js
const argv = require('yargs')
    .command('listar', 'imprime en cosola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).command('crear', 'crea un archivo txt con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).help()
    .argv;*/

//const argv = requiere('./config/yargs.js').argv; tambien se puede hacer este require pero mas elegante con destructuracion 

const { argv } = require('./config/yargs.js');
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo.green}`))
            .catch(err => {
                console.log(err);
            })

        break;
    default:
        console.log('comando no reconocido');
}

//let base = 'abc';
//let argv2 = process.argv;

//console.log('limite', argv.limite);

/*let parametro = argv[2];
let base = parametro.split('=')[1];



/*
crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(err => {
        console.log(err);
    })*/