/*
 *resize.js ensures the er-graph is the proper size and the nav-header is the proper size.
 */
$(document).ready( function() {
  $("#main").height($(window).height() - $('#header').height());
  $("#scroll").height($('#navbar').height() - $('#nav-header').height() - 2);

});

$(window).resize( function() {
  $("#main").height($(window).height() - $('#header').height());
  $("#scroll").height($('#navbar').height() - $('#nav-header').height() - 2);
});
