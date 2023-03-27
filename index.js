// Modules
const inquirer = require("inquirer");
const Company = require("./lib/company.js");
const mysql = require("mysql2");
require("console.table");
// Initializing mysql connection
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Overwatch",
    database: "company_db",
  },
  console.log("Connection established")
);

function viewEmployees() {
  db.query(
    `SELECT employee.id, 
    first_name AS "First Name", 
    last_name AS "Last Name", 
    role.title AS Title, 
    department.name AS Department, 
    role.salary AS Salary, 
    employee.manager_id
    FROM employee 
    JOIN role 
    ON employee.role_id = role.id 
    JOIN department 
    ON role.department_id = department.id`,
    (err, results) => {
      if (err) {
        return console.error(err);
      } else {
        console.log("\n========== Roles ==========\n");
        console.table(results);
        startPage();
      }
    }
  );
}
function addEmployee() {}
function updateRole() {}
function viewRoles() {
  db.query(
    "SELECT role.id, title AS Title, salary AS Salary, department.name AS Department FROM role JOIN department ON role.department_id = department.id",
    (err, results) => {
      if (err) {
        return console.error(err);
      } else {
        console.log("\n========== Roles ==========\n");
        console.table(results);
        startPage();
      }
    }
  );
}
function addRole() {}
// Logs a table of the departments with their ids
function viewDepartments() {
  db.query(
    "SELECT department.id, department.name AS Name FROM department",
    (err, results) => {
      if (err) {
        return console.error(err);
      } else {
        console.log("\n===== Departments =====\n");
        console.table(results);
        startPage();
      }
    }
  );
}
function addDepartment() {
  
}

// Prompts list of choices and redirects to another prompt on selection
function startPage() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
        name: "startPage",
      },
    ])
    .then((res) => {
      switch (
        res.startPage // Checking to see which response matches
      ) {
        case "View All Employees":
          viewEmployees();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update Employee Role":
          updateRole();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "Add Role":
          addRole();
          break;
        case "View All Departments":
          viewDepartments();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Quit":
          return process.exit();
      }
    });
}

// Starts program
startPage();
