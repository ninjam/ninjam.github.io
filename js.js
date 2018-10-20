// you can enter your JS here!

$(document).ready(function() {

	var run = setInterval('slideshow()', 5000),	
	item_width = $('#slides li').outerWidth(),
	slide_ul = $('#slides ul'); 
	
	$('#slides li:first').before($('#slides li:last'));
	$('#caption')[0].innerHTML = $('#slides li img')[0].alt;
	
	$(".imgLiquidFill").imgLiquid();

    //prev button click
	$('#prev').click(function() {          
		var left_indent = parseInt($('#slides ul').css('left'));
		//slide the item            
		slide_ul.animate({'left' : left_indent}, 200,function(){    
			$('#slides li:first').before($('#slides li:last'));           
			caption();
		});           
		return false; 
	});

   //next button click
	$('#next').click(function() {
		var left_indent = parseInt($('#slides ul').css('left'));
		slide_ul.animate({'left' : left_indent}, 200, function () {
			$('#slides li:last').after($('#slides li:first'));                 	
			caption(); 
		});
		return false;	
	});        
	
	//pausing the slideshow on hover or click
	$('.carousel').hover(
		function() {
			clearInterval(run);
		}, 
		function() {
			run = setInterval('slideshow()', 5000);	
		}
	);    
});
 
function slideshow() {
	var left_indent = parseInt($('#slides ul').css('left')),
	slide_ul = $('#slides ul');
	slide_ul.animate({'left' : left_indent}, 200, function () {
        //move the first item and put it as last item
		$('#slides li:last').after($('#slides li:first'));                 	
		caption();
	});
	return false;
}

function caption(){
    $('#caption')[0].innerHTML = $('#slides li img')[0].alt;
}

  
