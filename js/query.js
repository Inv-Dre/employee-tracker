const db = require("../db/connection");


class Query {
  viewDep(sect) {
    const query = "SELECT * FROM department";
    console.log("console logged sect", sect);
    db.query(query,(err, results) => {
      if (err) {
        console.log("Trouble with your query", err);
        return;
      }
      console.table(results);
    });
  }

  add(sect) {
    db.query(query, sect, (err, results) => {
      console.log(results);
    });
  }
}

module.exports = Query;
