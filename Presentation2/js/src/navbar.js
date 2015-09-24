
/*
*A javascript file that uses jQuery to apply the collapsible lists from CollapsibleLists.min.js and 
*handle partial reloading of pages so that the navbar does not reload when navigating.
*/

$(document).ready(function(){
  $('.tab-elem').hide();
  $('#overview').show();
});
function switchTab(elem) {
  $('.tab-elem').hide();
  $('.tab').removeClass("active");
  $(elem).addClass("active")
  $('#'+elem.id.slice(0,-4)).show();
};
