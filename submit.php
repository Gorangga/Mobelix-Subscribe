<?php
    if(isset($_POST['submit']))
    {
        $telefon = $_POST['telefon'];
        
        //database details. You have created these details in the third step. Use your own.
        $servername  = "localhost";
        $username = "mobelix_goran";
        $pass = "mobelix2022";
        $dbname = "mobelix_broevi";

        //create connection
        $con = mysqli_connect($servername, $username, $pass, $dbname);
        //check connection if it is working or not
        if (!$con)
        {
            die("Connection failed!" . mysqli_connect_error());
        }
        //This below line is a code to Send form entries to database
        $sql = "INSERT INTO telefoni (id, telefon) VALUES ('0', '$telefon')";
      //fire query to save entries and check it with if statement
        $rs = mysqli_query($con, $sql);
        if($rs)
        {
            echo "Successfully saved";  } 
                 //connection closed.
        mysqli_close($con);
    }
?>