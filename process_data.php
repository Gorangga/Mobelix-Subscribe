<?php

//process_data.php

if(isset($_POST["telefon"]))
{
	sleep(5);
	$connect = new PDO("mysql:host=localhost; dbname=mobelix_broevi", "mobelix_admin", "MobelixAdmin#2018");

	$success = '';

	$telefon = $_POST["telefon"];

	$name_error = '';

    if(empty($telefon))
	{
		$name_error = 'Phone is Required';
	}
	else
	{
		if(!preg_match("/^[a-zA-Z-' ]*$/", $telefon))
		{
			$name_error = 'Внеси точен телефонски број!';
		}
	}


	if($name_error == '' )
	{
		//put insert data code here 

		$data = array(
			':telefon'			=>	$telefon
		);

		$query = "
		INSERT INTO telefoni (id, telefon) 
		VALUES ( :telefon)
		";

		$statement = $connect->prepare($query);

		$statement->execute($data);

		$success = '<div class="alert alert-success">Data Saved</div>';
	}

	$output = array(
		'success'		=>	$success,
		'name_error'	=>	$name_error,
	);

	echo json_encode($output);
	
}

?>