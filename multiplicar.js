const fs = require("fs");

console.clear();

let multiplicar = (base, limite, list) => {
  let data = "";

  for (let i = 1; i <= limite; i++) {
    data += `${base} x ${i} = ${i * base}\n`;
  }
  if (list === true) {
    console.log("=======================");
    console.log(`Tablas del ${base}`);
    console.log("=======================");
    console.log(data);
  }
  fs.writeFile(`./output/Tabla de ${base}`, data, (err) => {
    if (err) throw err;
    console.log(`Se ha creado la tabla del ${base}`);
  });
};

module.exports = {
  multiplicar,
};
