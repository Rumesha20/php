<?php
$servername = "localhost";
$username = "Rummo";
$password = "rk1234";
$dbname = "minpro";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to fetch data
$sql = "SELECT name, contact, email, address, complaint, place FROM complaint";
$result = $conn->query($sql);
if(isset($_POST['id']) && !empty($_POST['id'])) {
    // Sanitize the ID to prevent SQL injection
    $id = $_POST['id'];

    // Prepare and execute the delete statement
    $stmt = $conn->prepare("DELETE FROM complaint WHERE id = ?");
    $stmt->bind_param("i", $id); // 'i' indicates integer type
    if($stmt->execute()) {
        // Deletion successful
        echo "Entry deleted successfully.";
    } else {
        // Error in deletion
        echo "Error: Unable to delete the entry.";
    }
    $stmt->close(); // Close statement
} else {
    // ID not provided
    echo "Error: No ID provided.";
}










</body>
</html>