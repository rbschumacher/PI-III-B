function SetEmployees (employees) {
  localStorage.setItem('employees', JSON.stringify(employees))
}

function GetEmployees () {
  const employees = JSON.parse(localStorage.getItem('employees') || '[]')
  return employees
}

function SetSelectedEmployee (employee) {
  localStorage.setItem('employee', JSON.stringify(employee))
}

function GetSelectedEmployee () {
  const employee = JSON.parse(localStorage.getItem('employee') || '{}')
  return employee
}
