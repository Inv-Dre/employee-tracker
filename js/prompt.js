const inquirer = require("inquirer");

const Query = require("./query");

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
          break;
        }

        case "view all roles": {
          const view = new Query();
          view.viewRole();
    
          break;
        }

        case "view all employees": {
          ;
          break;
        }

        case "add a department": {
          break;
        }

        case "add a role": {
          break;
        }

        case "add an employee": {
          break;
        }
        case "update an employee role": {
        }
      }
    });
};

employeePrompt();
