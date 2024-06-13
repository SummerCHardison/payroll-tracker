// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employees = [];
  let addMore = true;

  // Above code adds an array that will have objects storing employee data pushed to it later, as well as starts a while loop for prompts.

  while (addMore) {
    const employeeFirstName = prompt("What is your employee's first name?");
    const employeeLastName = prompt("What is your employee's last name?");
    let employeeSalary;
      while (true) {
        employeeSalary = prompt("What is your employee's salary?");
        if (!isNaN(employeeSalary) && employeeSalary.trim() !== '') {
          employeeSalary = parseFloat(employeeSalary)
          break;
        } else {
          alert("This is not a valid entry.")
        }
      }

      // Above code promts user for employee information and creates a loop that forces a numeric input for the salary prompt.

    const employeeData = {
      firstName: employeeFirstName,
      lastName: employeeLastName,
      salary: employeeSalary
    }

    employees.push(employeeData);

    addMore = confirm("Would you like to add another employee?");

    // Above code creates an object to store employee data and push it to an array, as well as confirms if the user wants to add more employees.
  }
  return employees;
  // Returns data from array.
}

// Display the average salary
const displayAverageSalary = function (employees) {
  const salarySum = employees.reduce((sum, employeeData) => sum + employeeData.salary, 0);
  // The above code calculates the sum of the employees' salarys.
  
  const averageSalary = salarySum / employees.length
  // Divides the sum of the salarys by how many employees there are to calculate average.

  console.log(`Average Salary: ${averageSalary.toLocaleString("en-US", {style: "currency", currency: "USD"})}`);
  // Logs salary as valid USD currency to console.
}

// Select a random employee
const getRandomEmployee = function (employees) {
  const indexRandom = Math.floor(Math.random() * employees.length);
  //Picks random number from valid length of array.
  const employeeRandom = employees[indexRandom];
  //Picks the employee from the array.

  console.log(`Random employee: ${employeeRandom.firstName}, ${employeeRandom.lastName}`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
