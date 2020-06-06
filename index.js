const db = ["beans", "amala", "akara", "bread"];

const search = (input, database) => {
  const result = database.filter((food) => {
    return food.includes(input);
  });

  return result.length > 3 ? result.slice(0, 3) : result;
};

module.exports = search;
