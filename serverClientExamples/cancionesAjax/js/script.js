// Interfaz requerida para realizar peticiones Ajax al servidor.
let ajax = new XMLHttpRequest();
//Registrar un evento. Cuando el servidor responde.
ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('destino');
	alert("Estado: " + ajax.readyState);
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			capa.innerHTML = ajax.responseText;
			alert("Finalizando");
		}
		else {
			capa.innerHTML = "Error AJAX";
		}
	}
}

function peticionAjax(rutaUrl) {
	alert("Paso 1: hacemos la peticion");
	ajax.open("GET", rutaUrl);// Preparo la peticion o Request
    ajax.send();// Lanzo la peticion
}