const fetch = require("node-fetch");

const getPeople = async (fetch) => {
  try {
    const result = await fetch("https://swapi.dev/api/people/");
    let data = await result.json();
    return {
      count: data.count,
      results: data.results,
    };
  } catch (e) {
    console.log(e);
  }
};

// console.log(getPeople(fetch));
module.exports = getPeople;
