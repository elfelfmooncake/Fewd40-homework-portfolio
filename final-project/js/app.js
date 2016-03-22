$( document ).ready(function() {
	
	// if user loads URL with hash to begin with, filter content and select right tab
	if(location.hash.length){
		filter_target(location.hash.slice(1));
		$('a[href="'+location.hash+'"]').tab('show');
		// 'a[href=XXX]' is selecting all a's whose href=XXX
	}

	// define function that filters which posts get displayed
	function filter_target(target_category){
		console.log(target_category)
		// make everything display: appear
		if(target_category==='most-recent'){
			$('.post').css('display', 'inline');
		}
		else {
			$('.post.'+target_category).css('display', 'inline');
			// make posts that doesn't have target category disappear
			$('.post').not('.'+target_category).css('display','none'); 
		}
		console.log($('.post.'+target_category))
	};

	// listen for hash change event - i.e. when url changes to add #tab
	$(window).on("hashchange",function(e){
		console.log(location.hash); 
		filter_target(location.hash.slice(1)); //pass class name to filter_target
	})




    console.log( "ready!" );
}); //closing ready function