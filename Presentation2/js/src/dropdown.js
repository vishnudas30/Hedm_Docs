/*
*A javascript file that uses jQuery to handle all elements of the documentation pages that have show/hide functionality.
*/

$(document).ready(function() {
  $('.code-block').hide();
});

function showCode(elem) {
  $(elem).toggleClass('active');
  $(elem).parent().children('.code-block').toggle();
};
