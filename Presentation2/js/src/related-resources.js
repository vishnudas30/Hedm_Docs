// Hide the related resources section if the entity relates to no other entities.
$(document).ready(function() {
	element = $("#resource-list");
    if(element.children().length == 0){
    	$("#related-resources").hide();
    } 
});
