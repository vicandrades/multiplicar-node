const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} No es un numero `);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tablas/tabla-${base}-al-${limite}.txt`);
            }
        });

    });
}

let listarTabla = (base, limite = 10) => {

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`.blue);
    }

}

//hacer que esta funcion sea accedible desde todo el proyecto por medio del objeto module.exports
// primera forma de hacerlo
module.exports = {
    //crearArchivo : crearArchivo manera antigua
    crearArchivo,
    listarTabla
}

//tambien se podria usar esta forma
// module.exports.crearArchivo = (base) => { aca toda la funcion}