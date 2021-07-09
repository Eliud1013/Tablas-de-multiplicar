const { multiplicar } = require("./multiplicar");
const argv = require("./config/yargs");

if (argv.base && argv.limite) {
  console.log(
    `Has escogido ${argv.base} como base y ${argv.limite} como limite... `
  );
}

multiplicar(argv.base, argv.limite, argv.list);
