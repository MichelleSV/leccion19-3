var palabra = prompt("Ingresa una palabra");
var longitud = palabra.length;

var letras = prompt("Ingresa una letra");
var letra;

for (var i = 0; i < longitud; i++) {
	letra = palabra[i];
	if (letra == letras)
		document.write(letra.length);
}