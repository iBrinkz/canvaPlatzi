var d = document.getElementById("cuadrito_canva");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(50,10);
lienzo.lineTo(200,120);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(10,140);
lienzo.lineTo(300,240);
lienzo.stroke();
lienzo.closePath();