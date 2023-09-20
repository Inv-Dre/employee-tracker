const inquirer = require("inquirer");

const Query = require("./js/query");



// const connection = require('../db/connection.js')



const employeePrompt = async function () {
  await inquirer
    .prompt([
      {
        type: "list",
        name: "desiredaction",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])
    .then((answers) => {
      // console.log(answers);
      const querySelected = answers.desiredaction;
      console.log(querySelected);
      switch (querySelected) {
        case "view all departments": {
          const view = new Query();
        //   const sect = 'department';
          view.viewDep();
          employeePrompt();
          break;
        }

        case "view all roles": {
          const view = new Query();
          view.viewRole();
          employeePrompt();
          break;
        }

        case "view all employees": {
          const view = new Query();
          view.viewEmployee();
          employeePrompt();
          break;
        }

        case "add a department": {
          const add = new Query();
          add.addDep();
          // employeePrompt();
          break;
        }

        case "add a role": {
          const add = new Query();
          add.addRole();
          // employeePrompt();
          break;
        }

        case "add an employee": {
          const add = new Query;
          add.addEmployee();
          break;
        }
        case "update an employee role": {
          const update = new Query;
          update.updateEmployee();
          break;
        }
      }
    });
};

employeePrompt();




