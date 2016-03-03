
// name array city_input to include all the city items
var city_input = ["Select your city","nyc", "sf", "la", "austin", "sydney"]

// For loop to add city choices to dropdown menu; passing value attribute to option as best practice
for(var i = 0; i< city_input.length; i++) {
	$('select').append('<option value="'+city_input[i]+'">'+city_input[i]+'</option>');
}

// on changing the value of <select> element, run function photo_change
$("select").change(photo_change);

// define function photo_change for changing pictures according to user's choice of city
function photo_change() {
	$("body").attr("class", $("select").val())
}

// no need for me to add if/else if/else statement to control flow here. The old code below has the if/else statements





// old code below:

// $("#submit-btn").click(function(){
// 	event.preventDefault();
// 	$('body').removeClass();
// 	var city = $("#city-type").val();
// 	console.log(city);
// 	if(city==="nyc" || city==="new york" || city==="new york city" || city==="ny"){ 
// 		$('body').addClass('nyc')
// 	}

// 	else if(city==="sf" || city==="san francisco" || city==="sf bay area"){
// 		$('body').addClass('sf')
// 	}

// 	else if(city==="la" || city==="los angeles"){
// 		$('body').addClass('la')
// 	}

// 	else if(city==="austin"){
// 		$('body').addClass('austin')
// 	}

// 	else if(city==="sydney"){
// 	$('body').addClass('sydney')
// 	}

// 	else {$('body').removeClass();
// 	$(".no_city").show();
// 	}
// })

// $(".close-btn").click(function(){
// 	$(".no_city").hide();
// })


// // bind 'keyup' to function: when keyup=esc button, hide no_city
// $("body").bind('keyup', function(e) {
// 	var code = e.keyCode || e.which;
// 	if(code == 27) $(".no_city").hide(); //27 = esc key
// })
