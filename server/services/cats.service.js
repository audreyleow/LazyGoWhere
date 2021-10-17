const FAKE_DB = { 1: "tom", 2: "charlie", 3: "mike" };

function findAll() {
  return FAKE_DB;
}

function find(id) {
  return FAKE_DB[id];
}

module.exports = { find, findAll };
