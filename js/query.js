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
      employeePrompt();
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
      employeePrompt();
      return;
    });
  }

  viewEmployee() {
    const query = "SELECT employee.id, first_name, last_name, role.title, department.name AS department_name, role.salary, manager_id FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id";
    db.query(query, (err,results) => {
      if(err) {
        console.log("Trouble with your query",err);
        return;
      }
      console.table(results);
      employeePrompt();
    });
  }

  add(sect) {
    db.query(query, sect, (err, results) => {
      console.log(results);
    });
  }
}

module.exports = Query;
