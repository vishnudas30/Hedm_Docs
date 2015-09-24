$(document).ready(function(){
	var editor;
	$("#biz-tab").one("click", function(){
		//get initial data
		//var data = fs.readFileSync('./input/bizdocs/'+name+'.md');

		var myMinHeight = $(window).height() - $("#header").height() - $("#meta").height() - $("#tabs").height() - 5;
		var opts = {
		  container: 'epiceditor',
		  textarea: null,
		  basePath: '',
		  clientSideStorage: true,
		  localStorageName: 'epiceditor',
		  useNativeFullscreen: true,
		  parser: marked,
		  file: {
		    name: 'epiceditor',
		    defaultContent: '',
		    autoSave: 100
		  },
		  theme: {
		    base: '/css/base/epiceditor.css',
		    preview: '/css/preview/preview-dark.css',
		    editor: '/css/editor/epic-dark.css'
		  },
		  button: {
		    preview: true,
		    fullscreen: false,
		    bar: "auto"
		  },
		  focusOnLoad: true,
		  shortcut: {
		    modifier: 18,
		    fullscreen: 70,
		    preview: 80
		  },
		  string: {
		    togglePreview: 'Toggle Preview Mode',
		    toggleEdit: 'Toggle Edit Mode',
		    toggleFullscreen: 'Enter Fullscreen'
		  },
		  autogrow: {
		  	minHeight: myMinHeight
		  }
		}

		editor = new EpicEditor(opts).load();

		//Set initial file contents
		var content;
		var name = $('meta[name=name]').attr("content");
		$.get("/docs/"+name+"/"+name+".md", function(data) {
		    content = data;
		}).done(function(){
		    editor.getElement('editor').body.innerHTML = content.replace(/(?:\r\n|\r|\n)/g, '<br>');
		});
		
	});


	$("#biz-tab").on("click", function(){
		// editor.on('autosave', function(){
		console.log("saved"); 
		var content;
		var name = $('meta[name=name]').attr("content");
		var path = "/docs/"+name+"/"+name+".md";
		content = editor.getElement('editor').body.innerHTML;
		content = content.replace(/<br>/g, '\n');
		$.post('/php/updateMarkdown.php', {filename : name, data : content}, function(){
			console.log("we did it!");
			console.log(content);
		}).error(function(){
			console.log("we failed");
		});
	});

});
