/*
 * quickstart.js does scrolling for the quickstart.template.
 */


$(document).ready(function(){
	var index = 1;
	function scroll(){
		var div = '#step'+index;
		//$(div).hide('slide', {direction : 'left'});
		$(div).animate("slideOutLeft");
		$(div).hide();
		if(index<5)
			index+=1;
	}
	
	var div = '#step'+index;
	$('#qs').click(function(){scroll()});

});

(function ( $ ) {
    
    $.fn.animate = function(animation) {
        //Get the element to be animated.
    	element = $(this);
        element.addClass('animated ' + animation);        
        //Wait for animation to finish before removing classes
        window.setTimeout( function(){
            element.removeClass('animated ' + animation);
        }, 2000);   
    };
 
}( jQuery ));