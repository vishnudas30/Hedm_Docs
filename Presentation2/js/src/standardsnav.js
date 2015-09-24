/*
 * standardsnav.js implements the functionality of the standards navigation on index.html
 */

$(document).ready(function(){

  $("#standards").find("#standards-content").children().each(function(){
    $(this).hide();
  });
  $("#template").show();
  $("#template-list").addClass('active');
  /*When a link is clicked on the main page under topics, load the appropriate page in "content-area" allowing the navbar
   *to not reload.
   */
  $("#standards-nav").find("li").click(function(){
    //Switch tabs
    $("#standards-nav").find("li").removeClass('active');
    $("#standards").find("#standards-content").children().each(function(){
      $(this).hide();
      $(this).removeClass('active');
    });
    $(this).addClass('active');
    var id = $(this).attr("id").slice(0, $(this).attr("id").lastIndexOf('-'));
    $('#'+id).show();
  });
});
