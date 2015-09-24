function toggleDiff(name, commit) {
  var btn = $('#btn-'+commit);
  var span = btn.children('span');
  var diff = $('#diff-'+commit);
  
  diff.toggle();
  span.toggleClass('glyphicon-triangle-right');
  span.toggleClass('glyphicon-triangle-bottom');
  // if open
  if(span.hasClass('glyphicon-triangle-bottom')) {
    btn.html('Hide diff to previous release.' + span.prop('outerHTML'));
  } else {
    btn.html('Show diff to previous release.' + span.prop('outerHTML'));
  }
  
  //$.get('/json/' + 'test.json', function(delta) {
  var version = $('meta[name=version]').attr('content');
  $.get('/' + version + '/files/' + name + '/' + commit + '.json', function(delta) {
    diff.html(jsondiffpatch.formatters.html.format(delta, 'pre'));   
  })
};

$(document).ready( function() {
  $('.diff').hide();
});
