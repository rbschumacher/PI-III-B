
const institution =  new Institution('IMDAZ', 1);

const htmlText = (id) => (`
<button class="action" onclick="institution.setSelectedEmployee(${id})">
      Selecionar
</button>
`)

const tableBodyEl = document.getElementById('table-body')

const PopulateTable = (component, data) => {
  for (const employee of data) {
    const newTr = component.appendChild(document.createElement('tr'))
    newTr.id = employee.id
    
    const tdId = document.createElement('td')
    tdId.className = 'border2'
    tdId.innerText = employee.id 
    newTr.appendChild(tdId);

    const tdName = document.createElement('td')
    tdName.className = 'border2'
    tdName.innerText = employee.name 
    newTr.appendChild(tdName);
    
    const tdValue = document.createElement('td')
    tdValue.className = 'border2'
    tdValue.innerText =  employee.projects.length
    newTr.appendChild(tdValue)

    const tdActions = document.createElement('td')
    tdActions.className = 'border2'
    tdActions.innerHTML = htmlText(employee.id)
    newTr.appendChild(tdActions)
  }  
}


PopulateTable(tableBodyEl, institution.employees)