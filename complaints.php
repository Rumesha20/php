<?php
// Connect to MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "waterleak";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch data
$sql = "SELECT name, contact, email, address, complaint, place FROM complaint";
$result = $conn->query($sql);

// Close MySQL connection
$conn->close();
?>

