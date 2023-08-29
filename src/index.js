
require("dotenv").config();
const { port } = require("./config");
const server = require("./app");
const db = require("./integrations/mongodb");

async function main() {
  db.connect()
    .then(() => {
      console.log('Conexión exitosa a MongoDB');
      server.listen( port, () => console.log(`Server listening at http://localhost:${port}`));
      })
    .catch((error) => console.error(error));
}

main();