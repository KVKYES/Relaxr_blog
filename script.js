$ (document).ready(function() {
	/*$('#button').click(function() {
		alert("We are not yet taking sign ups");
	});*/

	

	// $('#button').click(function(){
	//       $('#no_sign_ups').show();
	//       $('#button').hide();
	//   });

	$('#readmore1').click(function(e){
		e.preventDefault();
		$('.content-post1-readmore1').show();
		$('#readmore1').hide();
		$('#readless1').show();
	});

	$('#readmore2').click(function(){
		event.preventDefault();
		$('.content-post2-readm2').show();
		$('#readmore2').hide();
		$('#readless2').show();
	});

	$('#readless1').click(function(e){
		e.preventDefault();
		$('.content-post1-readmore1').hide();
		$('#readless1').hide();
		$('#readmore1').show();
	});

	$('#readless2').click(function(e){
		event.preventDefault();
		$('.content-post2-readmore2').hide();
		$('#readless2').hide();
		$('#readmore2').show();
	});

});