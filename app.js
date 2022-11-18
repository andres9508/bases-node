console.clear();
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs');
const colors = require('colors')




crearArchivo(argv.b,argv.l,argv.h)
  .then((nombre) => console.log(nombre.green, "Creado".green))
  .catch((err) => console.log(err.red));
