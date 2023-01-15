//1. langkah pertama
// langkah ke-2 pada routes.js
const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      //cors bisa ditambahkan pada routes => path
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  //method info.uri digunakan untuk melihat host dan port
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
