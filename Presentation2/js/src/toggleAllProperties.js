/*
* toggleAllProperties.js toggles all of the lis of the properties tree either open or closed.
*/

$(document).ready(function(){
	$("#toggleAll").click(function(){
		var uls = document.getElementsByTagName('ul');
		for (var index = 0; index < uls.length; index ++){
			if (uls[index].className.match(/(^| )collapsibleList( |$)/)){
				var lis = uls[index].getElementsByTagName('li');
				for (var index = 0; index < lis.length; index ++){
          var text = lis[index].innerText.split(":")[0].trim();
          var ignoreFields = ["country", "place", "postalCode"];
          if(ignoreFields.indexOf(text.replace("*", ""))==-1)
					 toggle(lis[index]);
				}
			}
		}
	});
});

/* Opens or closes the unordered list elements directly within the
       * specified node. The parameter is:
       *
       * node - the node containing the unordered list elements
       */
      function toggle(node){

        // determine whether to open or close the unordered lists
        var open = node.className.match(/(^| )collapsibleListClosed( |$)/);

        // loop over the unordered list elements with the node
        var uls = node.getElementsByTagName('ul');
        for (var index = 0; index < uls.length; index ++){

          // find the parent list item of this unordered list
          var li = uls[index];
          while (li.nodeName != 'LI') li = li.parentNode;

          // style the unordered list if it is directly within this node
          if (li == node) uls[index].style.display = (open ? 'block' : 'none');

        }

        // remove the current class from the node
        node.className =
            node.className.replace(
                /(^| )collapsibleList(Open|Closed)( |$)/, '');

        // if the node contains unordered lists, set its class
        if (uls.length > 0){
          node.className += ' collapsibleList' + (open ? 'Open' : 'Closed');
        }

      }