const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password
      password: 'excel',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );