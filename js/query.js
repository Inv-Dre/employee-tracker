const db = require("../db/connection");
const inquirer = require("inquirer");

class Query {
  viewDep() {
    const query = "SELECT * FROM department";
    // console.log("console logged sect", sect);
    db.query(query, (err, results) => {
      if (err) {
        console.log("Trouble with your query", err);
        return;
      }
      console.table(results);
    });
  }

  viewRole() {
    const query =
      "SELECT role.id, title, salary, department.name AS department_name FROM role JOIN department ON role.department_id = department.id";
    db.query(query, (err, results) => {
      if (err) {
        console.log("Trouble with your query", err);
        return;
      }
      console.table(results);

      return;
    });
  }

  viewEmployee() {
    const query =
      "SELECT employee.id, first_name, last_name, role.title, department.name AS department_name, role.salary, manager_id FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id";
    db.query(query, (err, results) => {
      if (err) {
        console.log("Trouble with your query", err);
        return;
      }
      console.table(results);
    });
  }

  addDep() {
    // const query = "SELECT * FROM department";
    const department_name = [
      "Sales",
      "Legal",
      "Finance",
      "Support",
      "Add New Department",
    ];
    // console.log("console logged sect", sect);

    console.log(department_name);
    const depFinder = function () {
      inquirer
        .prompt([
          {
            type: "list",
            name: "finddep",
            message: "is it one of these or would you like to add another",
            choices: department_name,
          },
        ])
        .then((answer) => {
          console.log("list answer:", answer);
          const answerChoice = answer.finddep;
          if (answerChoice === "Add New Department") {
            const depPrompt = function () {
              inquirer
                .prompt([
                  {
                    type: "input",
                    name: "add_department",
                    message:
                      "what is the name of the department you'd like to add",
                  },
                ])
                .then((answers) => {
                  const newDepartment = answers.add_department;
                  const query = `INSERT INTO department (name) VALUES ('${newDepartment}')`;
                  db.query(query, (err, results) => {
                    if (results) {
                      db.query("SELECT * FROM department", (err, results) => {
                        if (results) {
                          console.table(results);
                        } else {
                          console.log("entry can not be null", err);
                        }
                      });
                    } else {
                      console.log("Trouble with your query", err);
                      return;
                    }
                  });
                });
            };
            depPrompt();
          } else {
            console.log("Department already exists");
            depFinder();
          }
        });
    };
    depFinder();
  }

  addRole() {
    const rolePrompt = function () {
      inquirer
        .prompt([
          {
            type: "input",
            name: "role_name",
            message: "what role would you like to add",
          },
          {
            type: "input",
            name: "salary",
            message: "what salary does this role make?",
            validate: function (input) {
              console.log("input", input);
              if (input < 0) {
                console.log("input invalid");
                rolePrompt();
              }

              return true;
            },
          },
          {
            type: "input",
            name: "department_id",
            message: "what is the department id?",
            validate: function (input) {
              console.log("input", input);
              if (input < 0) {
                console.log("input invalid");
                rolePrompt();
              }
              return true;
            },
          },
        ])
        .then((answer) => {
          const role = answer.role_name;
          const salary = answer.salary;
          const department_id = answer.department_id;
          const query = `INSERT INTO role (title, salary, department_id) VALUES ("${role}","${salary}","${department_id}")`;
          db.query(query, (err, res) => {
            console.log(query);
            if (res) {
              db.query("SELECT * FROM role", (err, res) => {
                if (err) {
                  console.log(
                    "Trouble showing table after role was added",
                    err
                  );
                } else {
                  console.table(res);
                  return;
                }
              });
            } else {
              console.log("Trouble with Inserting into role", err);
            }
          });
        });
    };
    rolePrompt();
  }

  addEmployee() {
    const employeePrompt = function () {
      inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message: "whats the employee's first name?",
            validate: function (input) {
              console.log("input", input);
              if (input < 0) {
                console.log("first name invalid");
                employeePrompt();
              }

              return true;
            },
          },
          {
            type: "input",
            name: "last_name",
            message: "whats the employee's last name?",
            validate: function (input) {
              console.log("input", input);
              if (input < 0) {
                console.log("last name invalid");
                employeePrompt();
              }

              return true;
            },
          },
          {
            type: "input",
            name: "role_id",
            message: "what is the role id?",
            validate: function (input) {
              if (input < 0) {
                console.log("role id invalid");
              } else {
                return true;
              }
            },
          },
          {
            type: "input",
            name: "manager_id",
            message: "what is the manager id?",
            validate: function (input) {
              console.log(input);
              if (input < 0 || input !== null) {
                console.log("manager id invalid");
                employeePrompt();
              }
              return true;
            },
          },
        ])
        .then((answer) => {
          const firstName = answer.first_name;
          const lastName = answer.last_name;
          const roleId = answer.role_id;
          const managerId = answer.manager_id;
          const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}","${lastName}","${roleId}", "${managerId}")`;
          db.query(query, (err, res) => {
            console.log(query);
            if (res) {
              db.query("SELECT * FROM employee", (err, res) => {
                if (err) {
                  console.log(
                    "Trouble showing table after employee was added",
                    err
                  );
                } else {
                  console.table(res);
                  return;
                }
              });
            } else {
              console.log("Trouble with Inserting into role", err);
            }
          });
        });
    };
    employeePrompt();
  }
}

module.exports = Query;
