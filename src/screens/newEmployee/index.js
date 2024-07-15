const institution = new Institution("IMDAZ", 1);

const $NameInput = document.getElementById("input");
const $ButtonSubmit = document.getElementById("button-employees");

const submit = () => {
  if (!$NameInput.value || $NameInput.value.length === 0) {
    alert("Por favor informe o nome");
    return;
  }

  const newEmployee = {
    id: institution.employees.length + 1,
    name: $NameInput.value,
  };

  institution.registerEmployee(newEmployee);
  alert("Funcionário cadastrado com sucesso!");
  window.location.href = "../employees/index.html";
};

$ButtonSubmit.onclick = submit;
