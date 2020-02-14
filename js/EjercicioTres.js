/* ******************
Funciones para ejercicio Tres
*********************/

// Variable Global
var arrarMax = new Array();

// Agrega datos al arreglo
function AddValueArrayMax(){
	arrarMax.push($('#txtNumeroMax').val());
	$('#txtNumeroMax').val('');
}

// Obtiene número mayor
function MaxValue(){
	var max = 0;
	arrarMax.forEach( function(valor, indice) {
    	if(valor > max){
			max = valor;
		}
	});
	
	$("#arrayEjercicioTres").text(max);
}
