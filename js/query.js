const db = require("../db/connection");
const query = "SELECT * FROM ?";

class Query {
  viewSect(sect) {
    db.query(query, sect, function (err, results) {
      return console.table(results)
    });
  }

  add(sect) {
    db.query(query, sect, function (err, results) {
      console.log(results);
    });
  }
}

module.exports = Query;
