$(document).ready(function() {
  // Handler for .ready() called.
});

// Paragraph readmore
$('.readmore a').click(function(){
	event.preventDefault();
	$('#show-this-on-click').slideDown();
	$('.readless').show();
	$('.readmore').hide();

})

$('.readless').click(function(){
	event.preventDefault();	
	$('#show-this-on-click').slideUp()
	$('.readless').hide()
	$('.readmore').delay(500).show();
	// why does the delay not work here? How to make readmore show after paragraph slide up?
})

// Side bar learn more

$('.learnmore').click(function(){
	event.preventDefault();
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();

})

// Preventing click button to reach the top of the page & add pop-up
$('.button').click(function(){
	event.preventDefault();
	alert("Sorry we're not ready yet")	
})