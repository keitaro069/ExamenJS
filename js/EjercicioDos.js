/* ******************
Funciones para ejercicio Dos
*********************/

// Calcula datos para Sumatoria
function SumaTotal(){
	var valorUno = $("#txtNumeroUno").val();
	var valorDos = $("#txtNumeroDos").val();
	var resultado = 0;
	
	if(valorUno < 0 || valorDos < 0){
		$("#txtNumeroUno").val("");
		$("#txtNumeroDos").val("");
		alert("No se aceptan número negativos");
		return;
	}
	
	for(var i = 0; i < valorDos; i++){
		resultado += parseInt(valorUno) + parseInt(i);
	}
	
	$("#resultEjercicioDos").text(resultado);
}