let ajax = new XMLHttpRequest();

ajax.onreadystatechange = procesarRespuesta;

function procesarRespuesta () {
    let capa = document.getElementById('salida');
    if (ajax.readyState == 4) {
        if (ajax.status == 200) {
            generarTabla();
        }
        else {
            capa.innerHTML = "Error AJAX, no se puede obtener los datos";
        }
    }
}

function loadAgenda() {
    ajax.open("GET", "datos.json");
    ajax.send();
}

function generarTabla() {
    var i;
    var textJson = ajax.responseText;
    var table="<tr><th>ID</th><th>NOMBRE</th><th>PROCEDENCIA</th><th>FOTO</th><th>CANTIDAD(KG)</th><th>PRECIO(€/KG)</th><th>VALOR TOTAL</th>";
    var obj = JSON.parse(textJson);
    //Convirtiendo un texto a un objeto JSON
    for (i = 0; i <obj.length; i++) { 
        table += "<tr><td>" +
            obj[i].id +
            "</td><td>" +
            obj[i].nombre +
            "</td><td>" +
              obj[i].procedencia +
            "</td><td>" +
            '<img src="'+obj[i].foto+'">' +
            "</td><td>" +
            obj[i].cantidad+"kg"+
            "</td><td>" +
            obj[i].precio+"€"+
            "</td><td>"+
            Math.round((obj[i].precio*obj[i].cantidad)*100)/100+"€"+
            "</td></td>" ;
    }
    document.getElementById("demo").innerHTML = table;
}
window.load=doShowAll();

function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // We can use localStorage object to store data.
        return true;
    } else {
            return false;
    }
}

function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Item</th><th>Value</th></tr>\n";
        var i = 0;
        //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            list += "<tr><td>" + key + "</td>\n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";
        }
        //If no item exists in the cart.
        if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        //You can use jQuery, too.
        document.getElementById('list').innerHTML = list;
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}
