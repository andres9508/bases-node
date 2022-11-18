const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    if (listar) {
      console.log("======================".yellow);
      console.log(`      tabla del ${base}`.blue);
      console.log("======================".yellow);
    }

    let salida=''
      let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".red} ${i} ${"=".red} ${base * i}\n`;
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    if (listar) console.log(consola);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

//son funciones similares asincronas
const crearArchivo2 = (base = 5) => {
  return new Promise((resolve, reject) => {
    console.log("======================");
    console.log(`      tabla del ${base}`);
    console.log("======================");

    let salida = "";

    for (let i = 1; i <= 10; i++) {
      salida += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    console.log(salida);
    resolve(`tabla-${base}.txt`);
  });
};

module.exports = {
  crearArchivo,
};
