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
    ajax.open("GET", "agenda.json");
    ajax.send();
}

function generarTabla() {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>DNI</th><th>NOMBRE</th><th>APELLIDO</th><th>CALLE</th><th>NUMERO</th><th>PISO</th><th>LETRA</th><th>EDAD</th><th>CASADO</th><th>AFICIONES</th></tr>";
    var obj = JSON.parse(textJson);
    //Convirtiendo un texto a un objeto JSON
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].dni +
            "</td><td>" +
            obj[i].nombre +
            "</td><td>" +
            obj[i].apellidos +
            "</td><td>" +
            obj[i].direccion.calle +
            "</td><td>" +
            obj[i].direccion.numero +
            "</td><td>" +
            obj[i].direccion.piso +
            "</td><td>" +
            obj[i].direccion.letra +
            "</td><td>" +
            obj[i].edad +
            "</td><td>" +
            obj[i].casado +
            "</td><td>" +
            obj[i].aficiones +
            "</td></tr>" ;
    }
    document.getElementById("demo").innerHTML = table;
}