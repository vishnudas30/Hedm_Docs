function toggleNav() {



  /*
  var s = $("#toggle-nav").children('span');
  s.toggleClass('glyphicon-triangle-left');
  s.toggleClass('glyphicon-triangle-right');
  //$('#navbar').addClass('animated');
  //$('#navbar').toggleClass('slideInLeft');
  //$('#navbar').toggleClass('slideOutLeft');
  
  //$('#content').addClass('animated');
  //$('#content').toggleClass('slideInLeft');
  //$('#content').toggleClass('slideOutLeft');
  // if shown
  if(s.hasClass('glyphicon-triangle-right')) {
    //s.html('Show');
    //$('#navbar').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {$('#navbar').hide();});
    $('#navbar').hide();
  }
  // if hidden 
  else {
    //s.html('Hide');
    $('#navbar').show();
  }
  
  $('#content').toggleClass('col-lg-9');
  $('#content').toggleClass('col-lg-12');
  */
};

$(document).ready(function(){

  /*

  $('.collapse').on("click", function(){
    $('#navbar').hide();
    $('.expand').show();
     $('#content').toggleClass('col-lg-9');
  $('#content').toggleClass('col-lg-12');
  });

  $('.expand').on("click", function(){
    $('#navbar').show();
    $(this).hide();
  });
*/

  // Set active state on left rail navigation by pulling title and matching against nav item ID
  var activeItem = $('meta[name=name]').attr("content");
  $('#'+activeItem+'').css('background-color','#e8f5f4');
});
