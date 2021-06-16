var output = document.getElementById("output");

var palla ={
    nome: "palla",
    peso: 10
}

palla.peso = parseInt(prompt("Inserisci nuovo peso della palla"));
for(var key in palla){
    console.log(key, palla[key]);
}

var giochi = [];
giochi.push(palla);

var inputGioco = {
    nome: prompt("Inserisci nome gioco"),
    peso: parseInt(prompt("Inserisci peso gioco"))
}

giochi.push(inputGioco);

for(var key in giochi[1]){
    console.log(key, giochi[1][key]);
}