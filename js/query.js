const db = require("../db/connection");


class Query {
  viewDep() {
    const query = "SELECT * FROM department";
    // console.log("console logged sect", sect);
    db.query(query,(err, results) => {
      if (err) {
        console.log("Trouble with your query", err);
        return;
      }
      console.table(results);
    });
  }

  viewRole() {
    const query = "SELECT role.id, title, salary, department.name AS department_name FROM role JOIN department ON role.department_id = department.id";
    db.query(query, (err,results) => {
      if (err) {
        console.log("Trouble with your query", err);
        return;
      }
      console.table(results);
    });
  }

  viewEmployee() {
    const query =
  }

  add(sect) {
    db.query(query, sect, (err, results) => {
      console.log(results);
    });
  }
}

module.exports = Query;
