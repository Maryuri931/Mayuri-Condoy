<form action="mar.html" method="post">

<?php
echo('<link rel="stylesheet" href="css/estilo.css">');


/*
$userA= $_SERVER['HTTP_USER_AGENT'];
print("<br><br>Navegador:".$userA);

if (preg_match("/Firefox/i", $userA)) {
    echo "<br><h3>Te encuentras navegando con Firefox</h3>";
} else {
    echo "<br><h3>Estas navegando en otro navaegador diferente Firefox.</h3>";
}*/
 /*   $arrayEstudiantes = array('Javier','Juan','Rikardo','Capa','Edy');*/
    print("<h1>Bienvenido a esta pagina</h1><br>
    <h2>Listado de estudiantes</h2>");
    echo('<table align= "center" style="background: pink" border="1"');
    echo('<tr>');
    echo '<th>Cedula</th>';
    echo '<th>Nombre</th>';
    echo '<th>Apellido</th>';
    echo '<th>Celular</th>';
    echo '<th>Carrera</th>';
    echo '</tr>';

    
    if(file_exists('Estudiantes.xml')){
        $xml = simplexml_load_file('Estudiantes.xml');
       foreach($xml->estudiante as $key0 => $estud){
          /* /echo "<br>Estudiante:" .$estud->apellido." con cedula: ".$estud->cedula ."<br>";*/
           echo '<tr style="background: 
           turquoise">';
           
            echo '<td>'.$estud->cedula.'-'.$estud->cedula['genero'].'-'.$estud->cedula['id'].'</td>';
            echo '<td>'.$estud->nombre.'</td>';
            echo '<td>'.$estud->apellido.'</td>';
            echo '<td>'.$estud->celular.'</td>';
            echo '<td>'.$estud->carrera.'</td>';
           echo '</tr>';
       }
       
    }else{
        exit('No se puede abrir el xml');
    }
    
    echo '</table>';
?>
    <button class="btn btn1"> Regresar </button>