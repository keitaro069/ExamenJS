/* ******************
Funciones para ejercicio Seis
*********************/

// Variables Globales
// Arreglos multidimencional
var arrayHorario = new Array();

function AddHoras(){
	var horaInicio = $("#txtHoraInicio").val();
	var horaFin = $("#txtHoraFin").val();
	var iniHoras = 0;
	var finHoras = 0;
	
	if(horaInicio == "" || horaFin == ""){
		$("#horarios").text("Debe llenar los 2 campos");
		return;
	}
	
	iniHor = parseInt(horaInicio.substr(0,2));
	finHoras = parseInt(horaFin.substr(0,2));
	
	if(iniHor > finHoras){
		$("#horarios").text("Hora inicio debe ser menor a hora fin");
		return;
	}
	
	arrayHorario.push(new Array(horaInicio,horaFin));
	
	$("#txtHoraInicio").val('');
	$("#txtHoraFin").val('');
}

function MostrarArray(){
	var horaIni = 0;
	var horaIniComparar = 0;
	var horaFin = 0;
	var horaFinComparar = 0;
	var contador = 0;
	var numClases = 0;
	
	//Bucle que recorre el primer array
	for(var i=0; i < arrayHorario.length; i++) {
		if(contador == 0){
			horaIniComparar = parseInt(arrayHorario[i][0].substr(0,2));
			horaFinComparar = parseInt(arrayHorario[i][1].substr(0,2));
		}else{
			horaIni = parseInt(arrayHorario[i][0].substr(0,2));
			horaFin = parseInt(arrayHorario[i][1].substr(0,2));
			
			if(horaIniComparar < horaIni && horaFinComparar < horaIni){
				numClases++;
			}
			
			horaIniComparar = horaIni;
			horaFinComparar = horaFin;
		}
		
		contador++;
	}
	
	$("#horarios").text("Número de salones:" + numClases);
}