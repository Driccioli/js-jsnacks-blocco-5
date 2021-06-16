var output = document.getElementById("output");

var students= [
    {
        nome: "Davide",
        cognome: "Riccioli",
        età: 21,
        descrizione: ""
    },
    {
        nome: "Pippo",
        cognome: "Baudo",
        età: 80,
        descrizione: ""
    },
    {
        nome: "Gastani",
        cognome: "Frinzi",
        età: 50,
        descrizione: ""
    }
];

for(var i=0; i<students.length; i++){
    students[i].descrizione = prompt("Inserisci una descrizione per " + students[i].nome + " " + students[i].cognome);
    console.log(students[i]);
}

function generateTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
      }
  }

  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

  var data = Object.keys(students[0]);
 
  generateTable(output, students);
  generateTableHead(output);