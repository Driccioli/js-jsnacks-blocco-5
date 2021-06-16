var output = document.getElementById("output");

var triangolo={
    base: 10,
    altezza:14
}

var ipotenusa = Math.sqrt(Math.pow(triangolo.base,2)+Math.pow(triangolo.altezza,2));
var perimetro = ipotenusa + triangolo.base + triangolo.altezza;
var area =  (triangolo.base * triangolo.altezza)/2;

console.log("Perimetro: ", perimetro);
console.log("Area: ", area);