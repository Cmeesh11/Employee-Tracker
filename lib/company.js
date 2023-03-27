const mysql = require('mysql2');
const cTable = require('console.table');
// Initializing mysql connection
const db = mysql.createConnection(
  {
  host: 'localhost',
  user: 'root',
  password: 'Overwatch',
  database: 'company_db'
},
console.log("Connection established")
);
// Class "Company" for future use
class Company {

  constructor() {

  }
  
}

function viewEmployees() {

}
function addEmployee() {

}
function updateRole() {

}  
function viewRoles() {

}
function addRole() {

}
// Logs a table of the departments with their ids
function viewDepartments() {
  db.query('SELECT * FROM department', (err, results) => {
    if (err) {
      return console.error(err);
    } else {
      return console.table(results);
    }
  });
}
function addDepartment() {

}

module.exports = Company;
module.exports = { viewEmployees, addEmployee, updateRole, viewRoles, addRole, viewDepartments, addDepartment };