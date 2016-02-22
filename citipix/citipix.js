$(document).ready(function() {
  // Handler for .ready() called.
});

$("#submit-btn").click(function(){
	event.preventDefault();
	var city = $("#city-type").val();
	console.log(city);
	if(city==="nyc" || city==="new york" || city==="new york city"){ 
		$('body').addClass('nyc')
	}

	else if(city==="sf" || city==="san francisco" || city==="sf bay area"){
		$('body').addClass('sf')
	}

	else if(city==="la" || city==="los angeles"){
		$('body').addClass('la')
	}

	else if(city==="austin"){
		$('body').addClass('austin')
	}

	else if(city==="sydney"){
	$('body').addClass('sydney')
	}

	else {$('body').removeClass();
	$(".no_city").show();
	}
})

$(".close-btn").click(function(){
	$(".no_city").hide();
})


// how to make the "return" key work for clicking the close button?
$(".close-btn").bind('click', function(e) {
	var code = e.keyCode || e.which;
	if(code == 13) {$(".no_city").hide();}
})
