var d = document.getElementById("cuadrito_canva");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;

while(l < lineas){
    dibujarLinea("#FAF", 0, 0, 10, 300);
    console.log("Linea " + l);
    l++;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}