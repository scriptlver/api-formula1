import fastify from "fastify";

const server = fastify({ logger: true });

const teams = [ { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Ferrari", base: "Maranello, Italy" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Mercedes", base: "Brackley, United Kingdom" }
]
server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return [];
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing"
  };
});


server.listen({port: 3333}, () => {
    console.log("Server init");
});

