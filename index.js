// Modules
const inquirer = require('inquirer');
const Company = require('./lib/company.js');
const { viewEmployees, addEmployee, updateRole, viewRoles, addRole, viewDepartments, addDepartment } = require('./lib/company.js');
// Prompts list of choices and redirects to another prompt on selection
function startPage() {
  inquirer.prompt([
  {
    type: "list",
    message: "What would you like to do?",
    choices: ["View All Employees", "Add Employee", 
    "Update Employee Role", "View All Roles", "Add Role", 
    "View All Departments", "Add Department", "Quit"],
    name: "startPage"
  }
]).then((res) => {
  switch(res.startPage) { // Checking to see which response matches
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
      return "quit";
  }
}).then((res) => {
  // Exits if response is quit
  if (res === "quit") {
  return;
  } else {
      // Reprompts the user if anything else is selected
    return startPage();
  }
})
};

// Starts program
startPage();
