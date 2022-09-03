<?php  
 //insert.php  
 $connect = mysqli_connect("localhost", "mobelix_goran", "mobelix2022", "mobelix_broevi");  
 if(isset($_POST["name"]))  
 {  
      $name = mysqli_real_escape_string($connect, $_POST["name"]);  
      $sql = "INSERT INTO telefoni(id, telefon) VALUES ('0', '$name')";  
      if(mysqli_query($connect, $sql))  
      {  
           ?> <script>
                    swal({
                        title: "Ви благодариме!",
                        text: "Ќе бидете известени за нашата нова промоција!",
                        icon: "success",
                        button: "Продолжи понатаму!",
                    });
                </script>
                <?php
      }  
 }  
 ?>  