class Project {
  constructor(id, name, initial_date, end_date) {
    this.id = id;
    this.name = name;
    this.initial_date = initial_date;
    this.end_date = end_date;
  }
}

class Employee {
  constructor(id, name, projects = []) {
    this.id = id;
    this.name = name;
    this.projects = projects;
  }

  addProject(project) {
    this.projects?.push(project);
    const thisEmployee = {
      id: this.id,
      projects: this.projects,
      name: this.name,
    };
    SetSelectedEmployee(thisEmployee);
    let employees = GetEmployees();
    employees = employees.filter((employee) => employee.id !== this.id);
    employees.push(thisEmployee);
    SetEmployees(employees);
  }

  changeProject(project, toEmployee) {
    this.projects = this.projects.filter((prop) => prop.id !== project.id);
    const thisEmployee = {
      id: this.id,
      projects: this.projects,
      name: this.name,
    };
    SetSelectedEmployee(thisEmployee);
    toEmployee.projects.push(project);
    let employees = GetEmployees();
    employees = employees.filter(
      (employee) => employee.id !== this.id && employee.id !== toEmployee.id
    );
    employees.push(thisEmployee);
    employees.push(toEmployee);
    SetEmployees(employees);
  }

  removeProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
    let employees = GetEmployees();
    employees = employees.filter((employee) => employee.id !== this.id);
    const thisEmployee = {
      id: this.id,
      projects: this.projects,
      name: this.name,
    };
    employees.push(thisEmployee);
    SetEmployees(employees);
    SetSelectedEmployee(thisEmployee);
  }

  getProject(id) {
    return this.projects?.find((p) => p.id === id);
  }
}

class Institution {
  constructor(name, id) {
    this.id = id;
    this.name = name;
    this.employees = GetEmployees();
  }
  setSelectedEmployee(id) {
    const employee = this.employees.find((e) => e.id == id);
    SetSelectedEmployee(employee);
    window.location.href = `../employee/index.html`;
  }

  getEmployee() {
    const { id, name, projects } = GetSelectedEmployee();
    const employee = new Employee(id, name, projects);
    return employee;
  }

  getEmployeeById(id) {
    return this.employees?.find((e) => e.id === id);
  }

  registerEmployee({ id, name }) {
    try {
      const newEmployee = new Employee(id, name);
      this.employees?.push(newEmployee);
      SetEmployees(this.employees);
      return !!newEmployee;
    } catch (error) {
      return false;
    }
  }
}
