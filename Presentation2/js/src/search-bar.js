/*
* search-bar.js contains the javascript that implements the navigation search bar's functionality.
*/
var names = []; //Array of the names has they appear in the URL (i.e. academic-disciplines)
var source = []; //Array of the names as they appear on the page (i.e. Academic Disciplines).
var tagsLower = []; //Array of lowercase titles used to make search case insensitive.
var attribs = {};
var attribsArray = ["not"];
var operators = ["and", "or"];

$(document).ready(function(){
  var url = window.location.href;  
  if (url.indexOf('?#') == -1){
    url+='?#';
    window.location.href = url;
  }
  
  var version = $("meta[name='version']").attr('content');
  version = "/" + version;
  $.get(version + "/js/src/attribs.json", function(data) {
    attribs = data;
  }).done(function(){
    //Build attrib list
    for(var key in attribs){
        for(var attrib in attribs[key]){
            if(attribsArray.indexOf(attribs[key][attrib]) == -1){
                attribsArray.push(attribs[key][attrib]);
           }
        }
      }
      //Make filter contents persist in session
      if(sessionStorage.filterTerm != undefined && sessionStorage.filterTerm != ""){
        $('#searchbar-attr').val(sessionStorage.filterTerm);
        $('#filterButton').click();
      }
    });

    //Push names in their proper format to the arrays described above.
	$('#navbar').find('a[id]').each(function(){
	  names.push($(this).attr("id").trim());
	  source.push($(this).text().trim());
	  tagsLower.push($(this).text().toLowerCase().trim());
	});

    /*
     *Autocomplete function that orders the search, first alphabetically by the first letter and words that contain the search string, 
     *then alphabetically by words that contain the search string.
     */
	$(function() {$( "#searchbar" ).autocomplete({
        source: function (request, response) {
            var term = $.ui.autocomplete.escapeRegex(request.term)
                , startsWithMatcher = new RegExp("^" + term, "i")
                , startsWith = $.grep(source, function(value) {
                    return startsWithMatcher.test(value.label || value.value || value);
                })
                , containsMatcher = new RegExp(term, "i")
                , contains = $.grep(source, function (value) {
                    return $.inArray(value, startsWith) < 0 &&
                        containsMatcher.test(value.label || value.value || value);
                });

            response(startsWith.concat(contains));
        }
   		});
	});

    //Attrib searchbar autocomplete

    function split( val ) {
      return val.split( /\s+/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }

    //Autocomplete function to set the source field for the Jquery UI autocomplete
    function setAutocomplete(sourceArray){
      return function (request, response) {
            //Extract the search term
            var term = $.ui.autocomplete.escapeRegex(extractLast( request.term ))
                //Match the search term, regardless of parentheses, and test if it matches terms in the sourceArray
                , startsWithMatcher = new RegExp("^" + term.replace(/\\\(|\\\)/g, ""), "i")
                , startsWith = $.grep(sourceArray, function(value) {
                value = value.label || value.value || value;
                    return startsWithMatcher.test(value);
                })
                , containsMatcher = new RegExp(term, "i")
                , contains = $.grep(sourceArray, function (value) {
                value = value.label || value.value || value;
                return $.inArray(value, startsWith) < 0 &&
                      containsMatcher.test(value);
                });
            //respond with the results of the matchers
            response(startsWith.concat(contains));
        };
    }

    var terms = [];

    //Search bar that filters by parameter
    $(function() {$( "#searchbar-attr" )
        //Smart autocomplete that changes source arrays based upon which terms could be validly used in the search.
        .keypress(function(){
            //Delete error message if it is up.
            if($("#paren-error").has("div")){
                $("#errorClose").click();
            }
            //ignore spaces
            var words = $(this).val().split(/\s+/);
            var count = 0;
            for(var i in words){
                //Check if the search words are in either source regardless of parentheses
                if(attribsArray.indexOf(words[i].replace(/\(|\)/g, ""))!=-1 || operators.indexOf(words[i].replace(/\(|\)/g, ""))!=-1){
                  //Ignore not, because after not the source array shouldn't change
                  if(words[i].toLowerCase() != "not"){
                    count++;
                  }
               }
            }
            //Change the source array based upon the last word that was typed
            if(count%2 != 0){
                $(this).autocomplete( "instance" ).source = setAutocomplete(operators);
            }else{
                $(this).autocomplete( "instance" ).source = setAutocomplete(attribsArray);
            }        
        })
        //Keybindings for TAB, BACKSPACE and ENTER
        .bind( "keydown", function( event ) {
        //Use tab to fill in highlighted field
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
                event.preventDefault();
            }
        //Once the user begins deleting their search, the filter should reset.
        if ( event.keyCode === $.ui.keyCode.BACKSPACE) {
                $("#scroll").find("li").each(function(){
                  $(this).show();
                });
            }
        //Hide the autocomplete when enter is pressed and save the search term in session storage.
        if ( event.keyCode === $.ui.keyCode.ENTER) {
                sessionStorage.filterTerm = $(this).val();
                 $(".ui-menu-item").hide();
            }
        })
        .autocomplete({
        //Initialize source array
        source: function (request, response) {
            var term = $.ui.autocomplete.escapeRegex(extractLast( request.term ))
                , startsWithMatcher = new RegExp("^" + "(*" + term + ")*", "i")
                , startsWith = $.grep(attribsArray, function(value) {
                    value = value.label || value.value || value;
                    return startsWithMatcher.test(value);
                })
                , containsMatcher = new RegExp("(*" + term + ")*", "i")
                , contains = $.grep(attribsArray, function (value) {
                    value = value.label || value.value || value;
                    return $.inArray(value, startsWith) < 0 &&
                        containsMatcher.test(value);
                });

            response(startsWith.concat(contains));
        },
        //Disable autofill on focus
        focus: function(event, ui){
            return false;
        },
        //Customized select so that suggestions are shown for each word, not the whole string.
        select: function( event, ui ) {
          terms = split( this.value );
          var numOpen = terms[terms.length-1].split('(').length - 1;
          var numClosed = terms[terms.length-1].split(')').length - 1;
          // remove the current input
          terms.pop();
          // add the selected item
          var pushVal = "";
          while(numOpen>0){
            pushVal+='('
            numOpen--;
          }
          pushVal += ui.item.value;
          while(numClosed>0){
            pushVal+=')'
            numClosed--;
          }
          terms.push( pushVal );
          // add placeholder to get the comma-and-space at the end
          // terms.push( "" );
          this.value = terms.join( " " );
          return false;
        }
        });
    });
});

/*
 *Adds animation to anchor tag that is selected by the search by using the Animate.css "shake" class.
 *Refer to https://daneden.github.io/animate.css/ for other possible animations.
 */
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

//Return the event for pressing the enter key
function enterEvent(){
    var e = $.Event('keypress');
    e.which = 13;
    return e;
}

//Try to execute a jump to an anchor tag in the navbar. This function is called each time a key is pressed in the search-bar.
//Note: the "Enter" key must be pressed in order to execute the jump.
function tryJump(e){
    //Store the enter code.
	var code = (e.keyCode ? e.keyCode : e.which);
    //Get the text currently entered in the search bar.
	var text = document.getElementById("searchbar").value;
    //Check if the text matches a name in the navbar.
	if(tagsLower.indexOf(text.toLowerCase())!=-1){
        //Check if enter has been pressed.
		if(code == 13){
            //Append # to the URL if it has yet to be appended.
			if(document.location.href.slice(-1)!="#") document.location += "#";
            //Append the name being searched for to the URL after #.
			document.location+= names[tagsLower.indexOf(text.toLowerCase())];
			var selector = '[id=' +names[tagsLower.indexOf(text.toLowerCase())];+ ']'
			$(selector).animate('shake');
		}
	}else{
        //Remove previously searched names from the URL.
		document.location.hash = "";
	}
}

//Try to filter the entities by attribute when enter is pressed.
function trySearch(e){
    //Store the enter code.
    var code = (e.keyCode ? e.keyCode : e.which);
    //Get the text currently entered in the search bar.
    var text = String(document.getElementById("searchbar-attr").value);
    //execute search if enter is pressed
    var results = [];
    if(code == 13){
        //parse search query
        var ifStatement = buildIfStatement(text);

        //filter search query
        for(var name in attribs){
            if(eval(ifStatement)){
                results.push(name);
            }
        }
        //based on the results, either hide or show an entity on the navbar.
        if(ifStatement != undefined && text != ""){
          $("#scroll").find("li").each(function(){
            if(results.indexOf(reverseParse($(this).text()).replace(/[^a-z]-|\s|\n/g,""))==-1){
                $(this).hide();
            }else{
                $(this).show();
            }
          });
        }
    }
    return results;
}

//Reverse the parsing of entity names from their parsed version to original version. 
//i.e. Academic Catalogs --> academic-catalogs
function reverseParse(name){
    name = name.toLowerCase();
    var names = name.split(" ");
    var retVal = "";
    for(var i = 2; i<names.length-1;i++){
        if(names[i]!=""){
            retVal += names[i]+'-';
        }
    }
    if(retVal.charAt(retVal.length-1) == "-"){
        retVal = retVal.substring(0, retVal.length-1);
    }
    return retVal;
}

var open  = "([<{";
var close = ")]>}";
var saveHeight;

//Add a div that displays errorStatements resulting from the attribute filter search bar.
function displayError(errorStatement){
    //If there is already an error statement in place, replace it.
    if(document.getElementById("paren-error") != null){
      $("#scroll").height($('#navbar').height() - $('#nav-header').height() + $('paren-error').height() - 2);
      $('#paren-error').remove();
    }

    //Insert the error statement.
    saveHeight = $('#nav-header').height();
    $('<div id = "paren-error" class = "col-lg-12">' + 
      '<div class="alert alert-danger alert-dismissible" role="alert">'+  
        '<button id="errorClose" type="button" class="close" data-dismiss="alert" aria-label="Close" onClick="return setHeight();"><span aria-hidden="true">&times;</span></button>'+
        '<pre style="overflow-x:scroll; word-wrap: normal;">' + errorStatement + '</pre>' +
        '</div>' +
      '</div>').insertAfter("#entity-search");

    //Set the proper height
    $("#scroll").height($('#navbar').height() - $('#nav-header').height() - 2);
    return;
}

//Set height function to be called to reset height of navbar when error is closed.
function setHeight(){
  $("#scroll").height($('#navbar').height() - saveHeight - 3);
}

//Create the if statement as string to be evaluated using Js eval() function.
//That if statement filters based upon what the user provides in the search.
//i.e. "metadata and title" would return "(attribs[name].indexOf("metadata")!=-1)&&(attribs[name].indexOf("title")!=-1)"
function buildIfStatement(text){
    var ifStatement = "";
    //Check to see if the brackets are mismatched.
    var check = checkBrackets(text);
    if(check != ""){
        //Display error if mismatch occurred
        displayError(check);
        return;
    }

    //Replace and, or and not from english to code.
    var replaceAndExp =/\s*and\s*/g;
    var replaceOrExp =/\s+or\s+/g;
    var replaceNotExp = /\s*not\s/g;
    text = text.replace(replaceAndExp, "&&");
    text = text.replace(replaceOrExp, "||");
    text = text.replace(replaceNotExp, "!");

    //Split the expression by the operators into each attribute.
    var splitExp = /&&|\|\|/g;
    var splitAttr = text.split(splitExp);
    var textIndex = 0;

    //Iterate through the attributes in order to build the if statement
    for(var i in splitAttr){

        if(text.indexOf(splitAttr[i])!=-1&&check==""){
            var str = "";
            //Check for not
            if(splitAttr[i].indexOf("!")!=-1){
                splitAttr[i] = splitAttr[i].replace("!", "");
                str+="!";
                textIndex++;
            }

            //Check for parens
            if(splitAttr[i].indexOf('(')!=-1 && splitAttr[i].indexOf(')')!=-1){
                var openCount = 0;
                var closedCount = 0;
                while(splitAttr[i].indexOf('(')!=-1){
                    splitAttr[i] = splitAttr[i].replace('(', '');
                    textIndex++;
                    openCount++;
                }
                while(splitAttr[i].indexOf(')')!=-1){
                    splitAttr[i] = splitAttr[i].replace(')', '');
                    textIndex++;
                    closedCount++;
                }
                while(openCount > closedCount){
                    str += '(';
                    openCount--;
                }
                str += '(attribs[name].indexOf("'+splitAttr[i].trim()+'")!=-1)';
                while(closedCount > openCount){
                    str += ')';
                    openCount--;
                }
            } else if(splitAttr[i].indexOf('(')!=-1){
                var parenCount = 0;
                while(splitAttr[i].indexOf('(')!=-1){
                    splitAttr[i] = splitAttr[i].replace('(', '');
                    textIndex++;
                    parenCount++;
                }
                while(parenCount>0){
                    str += '(';
                    parenCount--;
                }
                str += '(attribs[name].indexOf("'+splitAttr[i].trim()+'")!=-1)';
            } else if(splitAttr[i].indexOf(')')!=-1){
                var parenCount = 0;
                while(splitAttr[i].indexOf(')')!=-1){
                    splitAttr[i] = splitAttr[i].replace(')', '');
                    textIndex++;
                    parenCount++;
                }
                str += '(attribs[name].indexOf("'+splitAttr[i].trim()+'")!=-1)';
                while(parenCount>0){
                    str += ')';
                    parenCount--;
                }
            }else{
                str += '(attribs[name].indexOf("'+splitAttr[i].trim()+'")!=-1)';
            }
           
            //Determine which attribute goes after each search term
            textIndex += splitAttr[i].length;
            var operator = text[textIndex];
            if(operator === undefined){
                operator = "";
            }
            ifStatement+= (str + operator + operator);
            textIndex+=2;
        }
    }
    return ifStatement;

} 

//Checks for unmatching bracket pairs.
//Returns errorStatement if not matching, else returns "".
function checkBrackets( str ){
  var initStr = str;
  var un = ""
  var s;
  //Find the difference in length between the string with and without inner parens (used to determine number of spaces before "^").
  var delta = str.length - str.replace( /[^{}[\]()]/g, '' ).length;
  //Replace inner parentheses
  str = str.replace( /[^{}[\]()]/g, '' );
  //Continue to replace inner parentheses, updating the delta, until their are either no more ')' or no more '('.
  while ( s != str ) { 
    s = str;
    if(str.indexOf(')') == -1){
      delta+=str.length;
    } else if(str.indexOf('(') == -1){
      un = "un";
    }
    str = str.replace( /{}|\[]|\(\)/g, '' );
    delta += s.length - str.length;
  }

  //Build the error statement using the spacing before the "^".
  var spacing = " ".repeat(delta)+"^";
  var errorMessage = "Error: "+ un +"expected close parenthesis.";
  var errorStatement = initStr + '\n' + spacing + '\n' + errorMessage;

  //If parentheses mismatched, return the errorStatement, else return "".
  if(!str == false) {return errorStatement; } else { return "";}
}

//Return the enter event.
function enterEvent(){
    var e = $.Event('keypress');
    e.which = 13;
    return e;
}
