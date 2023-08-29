
require("dotenv").config();
const { port } = require("./config");
const server = require("./app");

async function main() {
  console.log('Conexión exitosa a MongoDB');
  server.listen( port, () => console.log(`Server listening at http://localhost:${port}`));
}

main();