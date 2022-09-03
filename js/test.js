// function submitForm()
// 		{
// 			var name = $('input[name=name]').val();

// 			if(name != '')
// 			{
// 				var formData = {name: name};
// 				$('#message').html('<span style="color: red">Processing form. . . please wait. . .</span>');
// 				$.ajax({url: 'submit.php', type: 'POST', data: formData, success: function(response)
// 				{
// 					var res = JSON.parse(response);
// 					console.log(res);
// 					if(res.success == true)
// 						$('#message').html('<span style="color: green">Form submitted successfully</span>');
// 					else
// 						$('#message').html('<span style="color: red">Form not submitted. Some error in running the database query.</span>');
// 				}
// 				});
// 			}
// 			else
// 			{
// 				$('#message').html('<span style="color: red">Please fill all the fields</span>');
// 			}
			
			
// 		}







// function save_data()
// {
// 	let form_element = document.getElementById('telefon');
// 	let form_data = new FormData();

// 	for(let count = 0; count < form_element.length; count++)
//                 {
//                     form_data.append(form_element[count].name, form_element[count].value);
//                 }

// 	document.getElementById('submit').disabled = true;

// 	let ajax_request = new XMLHttpRequest();

// 	ajax_request.open('POST', 'process_data_v1.php');

// 	ajax_request.send(form_data);

//     ajax_request.onreadystatechange = function()
// 	{
// 		if(ajax_request.readyState == 4 && ajax_request.status == 200)
// 		{
// 			document.getElementById('submit').disabled = false;

// 			let response = JSON.parse(ajax_request.responseText);

// 			if(response.success != '')
// 			{
// 				document.getElementById('sample_form').reset();

// 				document.getElementById('message').innerHTML = response.success;

// 				setTimeout(function(){

// 					document.getElementById('message').innerHTML = '';

// 				}, 5000);

// 				document.getElementById('name_error').innerHTML = '';
// 			}
// 			else
// 			{
// 				//display validation error
// 				document.getElementById('name_error').innerHTML = response.name_error;
// 			}
		
// 		}
//     }
// }


// function submitForm() {
//     var  xmlhttp;
//     if(window.XMLHttpRequest){
//       xmlhttp = new XMLHttpRequest();
//     }else if(window.ActiveXObject){
//       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")

//     }

//     // Instantiating the request object
//     xmlhttp.open("POST", "submit.php", true);
//      // Defining event listener for readystatechange event
//     xmlhttp.onreadystatechange = function() {
//        // if (this.readyState !== "complete"){
//        //    document.getElementById("response_message").innerHTML = "Loading";
//        // }
//         if (this.readyState === 4 && this.status === 200)
//         {
//             //alert(this.responseText); // Here is the response
//             document.getElementById("response_message").innerHTML = this.responseText;
//            // console.log(this.responseText);
//         }
//     }

//     // Retrieving the form data
//     var myForm = document.getElementById("myForm");
//     var formData = new FormData(myForm);
// 	console.log(formData);

//     // Sending the request to the server
//     xmlhttp.send(formData);


// }