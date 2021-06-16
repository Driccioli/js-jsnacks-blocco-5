var numeri=[10,7,8];
var totale=0;
var media=0;
for(var i=0; i<numeri.length; i++){
    totale += numeri[i];
}

media=totale/numeri.length;
console.log(numeri);
console.log("Media: "+ media);
output.innerHTML += "Numeri: " + numeri;
output.innerHTML +="<br> Media numeri: " + media;

var players=[
    {
        nome: "Michael",
        cognome: "Jordan",
        anno: 1923,
        punteggio: 100
    },
    {
        nome: "John",
        cognome: "Cena",
        anno: 1984,
        punteggio: 78
    },
    {
        nome: "Giorgio",
        cognome: "Festinoni",
        anno: 1999,
        punteggio: 87
    }
]

var basketTotale = 0;

for(var i=0; i<players.length; i++){
    console.log(players[i]);
    for(var key in players[i]){
        output.innerHTML += "<br>" + key + ": " + players[i][key];
    }
    
    basketTotale += players[i].punteggio;
}

var basketMedia = basketTotale/players.length;
console.log("BasketMedia: "+ basketMedia);
output.innerHTML += "<br> Media punteggi giocatori di basket: " + basketMedia;