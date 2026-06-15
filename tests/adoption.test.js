const request = require("supertest");
const app = require("../src/server");

//TEST GET

describe("GET /api/adoptions", () => {

  test("should return available frogs", async () => {

    const response = await request(app)
      .get("/api/adoptions");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);

  });

});
//GET por ID válido
test("should return frog with id 1", async () => {

  const response = await request(app)
    .get("/api/adoptions/1");

  expect(response.statusCode).toBe(200);
  expect(response.body.id).toBe(1);

});
//GET ID inexistente
test("should return 404 when frog does not exist", async () => {

  const response = await request(app)
    .get("/api/adoptions/999");

  expect(response.statusCode).toBe(404);

});

//TEST POST

test("should adopt frog successfully", async () => {

  const response = await request(app)
    .post("/api/adoptions/1");

  expect(response.statusCode).toBe(200);
  expect(response.body.frog.adopted).toBe(true);

});


test("should return 404 when adopting non-existent frog", async () => {

  const response = await request(app)
    .post("/api/adoptions/999");

  expect(response.statusCode).toBe(404);

});

//Ya adoptada
test("should return 400 when frog is already adopted", async () => {

  await request(app).post("/api/adoptions/2");

  const response = await request(app)
    .post("/api/adoptions/2");

  expect(response.statusCode).toBe(400);

});

//Evolucionar sin adoptar

test("should return 400 when evolving a non-adopted frog", async () => {

  const response = await request(app)
    .post("/api/adoptions/3/evolve");

  expect(response.statusCode).toBe(400);

});

//Evolución exitosa

test("should evolve an adopted frog", async () => {

  await request(app).post("/api/adoptions/4");

  const response = await request(app)
    .post("/api/adoptions/4/evolve");

  expect(response.statusCode).toBe(200);
  expect(response.body.frog.stage).toBe("tadpole");

});

//Evolucionar rana inexistente

test("should return 404 when evolving non-existent frog", async () => {

  const response = await request(app)
    .post("/api/adoptions/999/evolve");

  expect(response.statusCode).toBe(404);

});

//Evolucionar rana ya adulta
test("should return 400 when frog is fully evolved", async () => {

  await request(app).post("/api/adoptions/5");

  await request(app).post("/api/adoptions/5/evolve");
  await request(app).post("/api/adoptions/5/evolve");
  await request(app).post("/api/adoptions/5/evolve");

  const response = await request(app)
    .post("/api/adoptions/5/evolve");

  expect(response.statusCode).toBe(400);

});

