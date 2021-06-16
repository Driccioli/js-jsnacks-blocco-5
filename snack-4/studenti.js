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

