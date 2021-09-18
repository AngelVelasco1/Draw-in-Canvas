/* Variables para form and button*/
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("button");
boton.addEventListener("click", dibujarPorClick);

var d = document.getElementById("Dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var lineas = 30;
var l = 0;
var yi, xf, yf, xi;

function dibujarLineas(color, Xinicial, Yincial, Xfinal, Yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(Xinicial, Yincial);
  lienzo.lineTo(Xfinal, Yfinal);
  lienzo.stroke();
  lienzo.closePath();
  /* Para Hacer la esfera */
  lienzo.fillStyle = "white  ";
  lienzo.arc(150, 150, 50, 0, 20);
  lienzo.fill();
}

function dibujarPorClick() {
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf, yf, xi;
  var espacios = ancho / lineas;

  for (l = 0; l < lineas; l++) {
    yi = espacios * l;
    xf = espacios * (l + 1);
    yf = 290 - espacios * l;
    xi = espacios * l;
    console.log("Las lineas son: " + l);
    dibujarLineas("#ff0049", ancho - 1, yi, xf, 1);
    dibujarLineas("#0229ff", 1, yi, xf, 299);
    dibujarLineas("#29fff9", xi, 299, 299, yf);
    dibujarLineas("#fff007", xi, 1, 1, yf);
    console.log("linea Es Igual a: " + l);
  }
  dibujarLineas("white", 1, 1, ancho - 1, 1);
  dibujarLineas("white", ancho - 1, 1, ancho - 1, ancho - 1);
  dibujarLineas("white", 1, 1, 1, ancho - 1);
  dibujarLineas("white", 1, ancho - 1, ancho - 1, ancho - 1);
}
