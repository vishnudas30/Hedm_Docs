$(document).ready(function() {

	/*$("#searchButton").click(function(){
		console.log("reached search");
		var e = $.Event('keypress');
		e.which = 13; 
		$("#searchbar").trigger(e);
	});

	$("#filterButton").click(function(){
		console.log("reached filter");
		var e = $.Event('keypress');
		e.which = 13; 
		$("#searchbar-attr").trigger(e);
	});*/

	function enterEvent(){
		var e = $.Event('keypress');
		e.which = 13;
		return e;
	}
});