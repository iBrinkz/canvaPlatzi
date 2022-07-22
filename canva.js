var d = document.getElementById("cuadrito_canva");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xi, yf;
var yi, xf;
var colorcito = "red";

for(l =0; l < 30; l++){
    xi = 300 - 10*(l+1);
    yf = 300 - 10 * l;
    dibujarLinea(colorcito, xi, 0, 300, yf);
    console.log("Linea " + l);
}

for(l =0; l < 30; l++){
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("Linea " + l);
}

dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colorcito, 299, 0, 299, 299);
dibujarLinea(colorcito, 299, 1, 1, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}