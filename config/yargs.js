const { boolean } = require("yargs");

const argv = require("yargs")
  .option("base", {
    alias: "b",
    demandOption: true,
    type: "number",
    description: "Choose a base ",
  })

  .option("limite", {
    alias: "l",
    demandOption: true,
    type: "number",
    description: "Choose a limit",
  })
  .option("list", {
    alias: "ls",
    description: "Lista las tablas",
    type: "boolean",
    default: false,
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw Error("La base tiene que ser un numero");
    }
    if (isNaN(argv.limite)) {
      throw Error("El limite tiene que ser un numero");
    }

    return true;
  }).argv;

module.exports = argv;
