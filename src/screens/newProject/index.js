const institution = new Institution("IMDAZ", 1);

const nameInputEl = document.getElementById("nameInput");
const intialDateInputEl = document.getElementById("initialDateInput");
const endDateInputEl = document.getElementById("endDateInput");
const submitButtonEl = document.getElementById("propButton");
const pageTitleEl = document.getElementById("title");
const employee = institution.getEmployee();

pageTitleEl.innerText = employee.name;

const onClick = async () => {
  if (!nameInputEl.value) {
    alert("Por favor insira o nome do projeto");
    return;
  }

  if (!intialDateInputEl.value) {
    alert("Por favor insira a data de ínicio do projeto");
    return;
  }

  if (!endDateInputEl.value) {
    alert("Por favor insira a data final do projeto");
    return;
  }

  const newProj = new Project(
    employee.projects.length + 1,
    nameInputEl.value,
    intialDateInputEl.value,
    endDateInputEl.value
  );

  employee.addProject(newProj);

  alert("Projeto cadastrado com sucesso");
  window.location.href = "../employee/index.html";
};

submitButtonEl.onclick = onClick;
