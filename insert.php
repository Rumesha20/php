<?php
$servername = "localhost";
$username = "Rummo";
$password = "rk1234";
$database = "minpro";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_POST['ins'])) {
    $nm1 = $_POST['name'];
    $nm2 = $_POST['name1'];
    $mob1 = $_POST['mob1'];
    $mob2 = $_POST['mob2']; 
    $add = $_POST['add'];

    // Prepare SQL statement
    $stmt = $conn->prepare("INSERT INTO contact (contact1_name, contact2_name, contact1_no, contact2_no, address) VALUES ('$nm1','$nm2','$mob1','$mob2','$add')");
    

    // Execute the statement
    if ($stmt->execute()) {
        echo "<script>alert('Contact Inserted')</script>";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>