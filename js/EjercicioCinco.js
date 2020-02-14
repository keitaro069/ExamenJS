/* ******************
Funciones para ejercicio Cinco
*********************/

// Valida keyPress '()' y '[]'
// Código ascii '(' -> 40, '') -> 41, '[' -> 91, ']' -> 93
// Solo acepta parentecis y corchetes
$(document).ready(function(){
	$('#txtNumeroCorchea').on('keypress', function (e) {
	    if (!(e.which == 40 || e.which == 41 || e.which == 91 || e.which == 93)){
			e.preventDefault();
		} 
	});
});

// Valida cadena como si fuera un palindormo
// Validando con su codigo ascii
function ValidateCorchea(){
	var cadena = $('#txtNumeroCorchea').val();
	var palindromo = cadena.length / 2;
	var conteo = 0;
	
	for(var i = 0; i < palindromo; i++){
		if((cadena[i].charCodeAt(0) == 40 && cadena[cadena.length-i-1].charCodeAt(0) == 41)
			|| (cadena[i].charCodeAt(0) == 91 && cadena[cadena.length-i-1].charCodeAt(0) == 93)){
			conteo++;
		} else{
			conteo = 0;
		}
	}
	
	$("#validandoCorchea").text(conteo != 0);
}
