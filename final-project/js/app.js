$( document ).ready(function() {
	
// Isotope filtering by div class
	$('#most-recent a').click(function (e) {
  	e.preventDefault();
  	$(this).tab('show'); 
  	$grid.isotope({ filter: '*' });
  		});

    $('#popular a').click(function (e) {
  	e.preventDefault();
  	$(this).tab('show'); 
  	$grid.isotope({ filter: '.popular' });
  		});

    $('#growth a').click(function (e) {
  	e.preventDefault();
  	$(this).tab('show'); 
  	$grid.isotope({ filter: '.growth' });
  		});

    $('#leadership a').click(function (e) {
  	e.preventDefault();
  	$(this).tab('show'); 
  	$grid.isotope({ filter: '.leadership' });
  		});

    $('#personal a').click(function (e) {
  	e.preventDefault();
  	$(this).tab('show'); 
  	$grid.isotope({ filter: '.personal' });
  		});





    console.log( "ready!" );
});