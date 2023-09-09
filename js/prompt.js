const inquirer = require('inquirer');



const employeePrompt = async function () {

   await inquirer.prompt([
    {
        type: 'list',
        name: 'desiredaction',
        message: 'What would you like to  do?',
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
   .await ((answers) => {
    switch (answers) {
        case:
            
            break;
    
        default:
            break;
    }

   })
}