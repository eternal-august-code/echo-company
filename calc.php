<?php
function dump($var) {
    echo "<pre>";
    var_dump($var);
    echo "</pre>";
}

$date = explode('.', $_POST['depositDate']);

$datenow=getdate();
$date=$date[2].'.'.$date[1].'.'.$date[0];
$years=$_POST['depositTerm'];
$summ=$_POST['depositSum'];
$daysu=365;
$percent=0.1;
$daysn=date("d", strtotime($date));
$summadd=$_POST['replenishmentSum'];

if ($_POST['depositReplenishment'] == 'Y') {
    if ($summadd == '') $summadd=0;
}
else $summadd=0;

$res=$summ+($summ+$summadd)*$years*(0.1/365);

echo json_encode($res);