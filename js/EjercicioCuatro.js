/* ******************
Funciones para ejercicio Cuatro
*********************/

// Variable Global
var arrarDuplicate = new Array();

// Agrega datos al arreglo
function AddValueArrayDuplicate(){
	arrarDuplicate.push($('#txtNumeroDuplicate').val());
	$('#txtNumeroDuplicate').val('');
}

// Remover Duplicados
function RemoveDuplicateValue(){
	var res = '';
	var quitarDuplicado = arrarDuplicate.filter(function(value, index, self) { 
  		return self.indexOf(value) === index;
	});
	
	quitarDuplicado.forEach( function(valor, indice) {
    	res += valor + ", "; 
	});
	
	$("#arrayEjercicioCuatro").text(res);
}
