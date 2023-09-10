const inquirer = require('inquirer');

const Query = require('./query')

const connection = require('../db/connection.js')

const view = new Query;

const employeePrompt = async function () {

   await inquirer
   .prompt([
    {
        type: 'list',
        name: 'desiredaction',
        message: 'What would you like to do?',
        choices: [
             'view all departments',
             'view all roles',
             'view all employees',
             'add a department',
             'add a role',
             'add an employee',
             'update an employee role'
        ]
    }
   ])
   .then ((answers) => {
    // console.log(answers);
       switch (answers) {
        case "{ desiredaction: 'view all departments' }":{
          return view.viewSect(department);
            // break;
        }
            
        case 'view all roles':{
            view.viewSect(role)

            break;
        }

         
        case 'view all employees':{
            Query.viewSect(employee)
            break;
        }
        
          
        case 'add a department':{

            break;
        }

         
        case 'add a role':{

            break;
        }


        case 'add an employee':{

            break;
        }
        case 'update an employee role':{

        }
    }

   })
}

employeePrompt();