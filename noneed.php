<?php
// Connect to MySQL database
$servername = "localhost";
$username = "Rummo";
$password = "rk1234";
$dbname = "minpro";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch data
$sql = "SELECT name, contact, email, address, complaint, place FROM complaint";
$result = $conn->query($sql);

?>