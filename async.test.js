const fetch = require("node-fetch");
const swapi = require("./async");

it("call starwars api to get data", async (done) => {
  expect.assertions(2);
  data = await swapi(fetch);
  expect(data.count).toEqual(82);
  expect(data.results.length).toBeGreaterThan(5);
  done();
});

