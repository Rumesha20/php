<?php
$con = mysql_connect("localhost", "Rummo", "rk1234");
mysql_select_db("minpro");
$cn1 = "";
$cn2 = "";
$cno1 = "";
$cno2 = "";
$addr = "";
$sql = "SELECT * FROM contact";
$rs = mysql_query($sql);
while ($rw = mysql_fetch_assoc($rs)) {
    $cn1 = $rw['contact1_name'];
    $cn2 = $rw['contact2_name'];
    $cno1 = $rw['contact1_no'];
    $cno2 = $rw['contact2_no'];
    $addr = $rw['address'];
}

if (isset($_POST['upd'])) {
    $nm1 = $_POST['name'];
    $nm2 = $_POST['name1'];
    $mob1 = $_POST['mob1'];
    $mob2 = $_POST['mob2'];
    $add = $_POST['add'];
    $sql = "";
    //$sql = "DELETE FROM contact";
    //mysql_query($sql);
    if ($nm2 == "") {
        $sql = "UPDATE contact SET contact1_name='$nm1', contact1_no='$mob1', address='$add'";
    } else {
        $sql = "UPDATE contact SET contact1_name='$nm1', contact2_name='$nm2', contact1_no='$mob1', contact2_no='$mob2', address='$add'";
    }

    if (mysql_query($sql)) {
        echo "<script>alert('Contact Updated')</script>";
    } else {
        echo mysql_error();
        //echo mysql_errno();
    }
}
?>
