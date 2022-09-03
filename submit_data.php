<?php
$host = "localhost";
$dbname = "mobelix_broevi";
$username = "mobelix_goran";
$password = "mobelix2022";

try 
{
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}

$response = array('success' => false);

if(isset($_POST['name']))
{
	// $sql = "INSERT INTO telefoni(name) VALUES('".addslashes($_POST['name'])."' )";
    $sql = "INSERT INTO telefoni (id, name) VALUES('0', 'name')";

	
	if($conn->query($sql))
	{
		$response['success'] = true;
	}
}

echo json_encode($response);