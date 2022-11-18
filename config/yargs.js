const argv = require("yargs")
  .option({
    'b': {
      alias: "base",
      type: "number",
      demandOption: true,
      describe:'Es la base de la tabla de multiplicar'
    },
    'l':{
      alias:'listar',
      type:'boolean',
      default:false,
      describe:'muestra la tabla en consola'
      
    },
    'h':{
      alias:'hasta',
      type:'number',
      demandOption:true,
      describe:'muestra la hasta caunto se multiplica'
    }
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que se numerica";
    } else if(isNaN(argv.h)){
      throw 'el hasta tiene que se numerica'
    }else{
      return true;

    }
   
  }).argv;

  module.exports=argv