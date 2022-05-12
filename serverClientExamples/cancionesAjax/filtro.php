<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Prueba</title>
    <link rel="stylesheet" type="text/css" href="css/estilo.css">
</head>
<body>
<?php
    function creaTabla($can) {
        $gru=$_GET["grupo"];
        echo "<table>";
        for ($i=0; $i<sizeof($can); $i++) {
            if ($can[$i][1]==$gru) {
                echo "<tr>";
                echo "<td>".$i."</td>";
                echo "<td>".$can[$i][0]."</td>";
                echo "<td>".$can[$i][1]."</td>";
                echo "</tr>";
            }
        }
        echo "</table>";       
    }
?>
<?php
    $canciones=[];
    $canciones[0]=["Nothing compares to you", "Sinead O connor"];
    $canciones[1]=["Still Loving You", "Scorpions"];
    $canciones[2]=["The Scientist","Coldplay"];
    $canciones[3]=["A Sky Full Of Stars","Coldplay"];
    $canciones[4]=["Scorpions lady","Scorpions"];
    $canciones[5]=["Nothing else matters","Metalica"];
    $canciones[6]=["Me paro cuando suena","Orquesta de las nubes"];
    $canciones[7]=["Bohemian rhapsody","Queen"];
    $canciones[8]=["Imagine","John Lennon"];
    $canciones[9]=["Another One Bites the Dust","Queen"];

    creaTabla($canciones);
?>

</body>
</html>