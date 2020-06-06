const searchEngine = require("./index");

const mockDb = ["beans", "amala", "akara", "bread"];

it("unknown search term", () => {
  expect(searchEngine("test", mockDb)).toEqual([]);
});
