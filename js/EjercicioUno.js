// Variables Globales
var arrayNumeros = new Array();
var arrayMayor = new Array();

/* ******************
Funciones para ejercicio Uno
*********************/

//  
function AddValueArray(){
	arrayNumeros.push($('#txtNumero').val());
	$('#txtNumero').val('');
}

function ResultValueArray(){
	var strResult = '';
	var compare = 0;
	var compareMayor = 0;
	
	arrayNumeros.forEach( function(valor, indice) {
		if(indice == 0){
			compare = valor;
		}else{
			if(compare < valor){
				arrayMayor.push(compare);
			}else{
				compareMayor = compare;
			}
			
			compare = valor;
		}
		//splice(3, 1);
	});
	
	arrayMayor.push(compareMayor);
	
	arrayMayor.forEach( function(valor, indice) {
    	strResult += valor + ", ";
	});
	
	$('#arrayEjercicioUno').text(strResult);
	
	arrayNumeros = new Array();
	arrayMayor = new Array();
}