// Interfaz requerida para realizar peticiones Ajax al servidor.
let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
	let capa = document.getElementById('salida');
	if (ajax.readyState == 4) {
		if (ajax.status == 200) {
			generarTabla();
		}
		else {
			capa.innerHTML = "Error AJAX, no se puede obtener la agenda";
		}
	}
}

function loadAgenda() {
	ajax.open("GET", "agenda.xml");
    ajax.send();
}

function generarTabla() {
	var i;
    var xmlDoc = ajax.responseXML;
    var table="<tr><th>NOMBRE</th><th>TELEFONO</th></tr>";
    var x = xmlDoc.getElementsByTagName("Contacto");
    for (i = 0; i <x.length; i++) { 
    	table += "<tr><td>" +
    	x[i].getElementsByTagName("Nombre")[0].childNodes[0].nodeValue +
    	"</td><td>" +
    	x[i].getElementsByTagName("Tlf")[0].childNodes[0].nodeValue +
    	    "</td></tr>";
    }
   document.getElementById("demo").innerHTML = table;

}
