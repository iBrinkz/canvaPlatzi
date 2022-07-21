var d = document.getElementById("cuadrito_canva");
var lienzo = d.getContext("2d");

dibujarLinea("black", 20, 260, 300, 30);
dibujarLinea("brown", 100, 120, 340, 266);
dibujarLinea("red", 50, 120, 350, 40);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}