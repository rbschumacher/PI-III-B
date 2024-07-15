const institution = new Institution("Ucpel");

const selectEmployee = institution.getEmployee();

const htmlText = (id) => `
  <button class='delete-button' onclick="deleteProject(${id})">Excluir</button>
`;

const pageTitleEl = document.getElementById("title");
const tableBodyEl = document.getElementById("table-body");

const deleteProject = (id) => {
  const $tr = document.getElementById(id);
  tableBodyEl.removeChild($tr);
  selectEmployee.removeProject(id);
};

const PopulateTable = (component, data) => {
  for (const project of data) {
    const newTr = component.appendChild(document.createElement("tr"));
    newTr.id = project.id;

    const tdName = document.createElement("td");
    tdName.className = "border2";
    tdName.innerText = project.name;
    newTr.appendChild(tdName);

    const tdInitialDate = document.createElement("td");
    tdInitialDate.className = "border2";
    tdInitialDate.innerText = new Intl.DateTimeFormat("pt-br").format(
      new Date(project.initial_date)
    );
    newTr.appendChild(tdInitialDate);

    const tdEndDate = document.createElement("td");
    tdEndDate.className = "border2";
    tdEndDate.innerText = new Intl.DateTimeFormat("pt-br").format(
      new Date(project.end_date)
    );
    newTr.appendChild(tdEndDate);

    const tdActions = document.createElement("td");
    tdActions.className = "border2";
    tdActions.innerHTML = htmlText(project.id);
    newTr.appendChild(tdActions);
  }
};

PopulateTable(tableBodyEl, selectEmployee.projects);
pageTitleEl.innerText = selectEmployee.name;
