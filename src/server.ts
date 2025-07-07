import fastify from "fastify";

const server = fastify({ logger: true });

const teams = [ { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Ferrari", base: "Maranello, Italy" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Mercedes", base: "Brackley, United Kingdom" }
];

const drivers = [
    { id: 1, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 2, name: "Charles Leclerc", team: "Ferrari" },
    { id: 3, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 4, name: "Lando Norris", team: "McLaren" }
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return [teams];
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return [drivers];
});


server.listen({port: 3333}, () => {
    console.log("Server init");
});

