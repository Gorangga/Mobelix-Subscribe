$(document).ready(function(){  
	$('#submit').click(function(){  
		 var name = $('#name').val();  
		 if(name == '')  
		 {  
			  $('#error_message').html("Внесете го вашиот телефонски број!");  
		 }  
		 else  
		 {  
			  $('#error_message').html('');  
			  $.ajax({  
				   url:"submitv1.php",  
				   method:"POST",  
				   data:{name:name},  
				   success:function(data){  
						$("form").trigger("reset");  
						$('#success_message').fadeIn().html(data);  
						setTimeout(function(){  
							 $('#success_message').fadeOut("Slow");  
						}, 2000);  
				   }  
			  });  
		 }  
	});  
}); 