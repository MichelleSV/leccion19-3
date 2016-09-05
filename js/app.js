var palabra = prompt("Ingresa una palabra");
var letra = prompt("Ingresa una letra");
var contador=0;
for (var i = 0; i < palabra.length; i++) {
	var letraComparar = palabra.charAt(i);
	if (letra === letraComparar){
		contador++;
	}
}
document.write(contador);