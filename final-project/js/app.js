$( document ).ready(function() {
	
	// On page load only: if user loads URL with hash to begin with, filter content and select right tab
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
			page(); //this re-does the pagination
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
		// reset pagination
		last_article = 6 //reset last article so each new tab page only shows 6 articles at a time
		// no need to make case for #most-recent because no tab has class .most-recent
		$('.'+location.hash.slice(1)).css('display','none'); //hide all tabs first then set pagination
		$('.'+location.hash.slice(1)).slice(last_article-6,last_article).css('display','inline')
		console.log('on hash change last_article='+last_article)
	})

	// pagination that doesn't utilize a server
	var last_article = 6

	function page(){
		$('.post').css('display','none')
		$('.post').slice(0,6).css('display','inline');
		last_article = 6
		console.log('page function sets last_article to'+last_article);
	};
	
	page(); //fun page function each time page loads

	// on clicking older articles, display more articles depending on page
	$('#older_articles').click(function(e){
		e.preventDefault();
		// need to figure out how to select the posts that are being displayed only
		if(location.hash==="#most-recent"){
			$('.post').slice(last_article,last_article+6).css('display','inline');
		}
		else if(location.hash.length){
			$('.'+location.hash.slice(1)).slice(last_article,last_article+6).css('display','inline');
		}		
		else {
			$('.post').slice(last_article,last_article+6).css('display','inline');
		}
		console.log('current last_article='+last_article)
		last_article = last_article + 6
		console.log('new last_article='+last_article)
	})

	// on clicking view_all, display all articles of the appropriate tab
	$('#view_all').click(function(e){
		e.preventDefault();
		if(location.hash==="#most-recent"){
			$('.post').css('display','inline')
		}	
		else if(location.hash.length){
			$('.'+location.hash.slice(1)).css('display','inline');
			}
		else{
			$('.post').css('display','inline');
		}	
		// last_article = 10000000;
		console.log('view all resets last_article to '+last_article)
	})

    console.log( "ready!" );
}); //closing ready function