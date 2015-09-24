/*
 *stickytabs.js makes the tabs (get, getid, etc.) stick to the top of the window when scrolled past.
 */
$(document).ready(function () {
  //Get the tabs
  
  var menu = $('#operations');
  
    //Javascript closure that ensures the offset of the tabs from the top is the offset from the top of the page
    //for all pages so navigation works while scrolled down.
    var origOffsetY = (function(){
        var executed = false;
        if(typeof(Storage) !== "undefined") {
            if(!sessionStorage.executed){
                sessionStorage.executed = false;
            }
        }else{
            console.log("No sessionStorage support on your browser.");
        }
        return function () {
            if((sessionStorage.executed==='true') == false){
                sessionStorage.executed = true;
                sessionStorage.offsetY = menu.offset().top;
                return menu.offset().top; 
            }else{
                return parseInt(sessionStorage.offsetY);
            }
        };
    })();
  try {
    var offsetY = $('#operations').offset().top - $('#operations').height() * 2 + 10;
  } catch(err) {
    return;
  }

    //Make tabs stick only if scrolled past.
  $('#content').scroll( function() {
    if ($('#content').scrollTop() >= offsetY) {
      $('#operationsdiv').addClass('sticky');
    } else {
      $('#operationsdiv').removeClass('sticky');
    }
  });
});
