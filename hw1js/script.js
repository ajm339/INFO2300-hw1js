$(document).ready(function(){

	// TODO: font color change
	
	$("#color").change(function(){
		var colorCHANGE = $("input:radio[name=color]:checked").val();
			if(colorCHANGE=="Red"){
				var newCOLOR = "#FF0000";
				$("#text").css("color", "#FF0000");
			} else if(colorCHANGE=="Blue"){
				var newCOLOR = "#0000FF";
				$("#text").css("color", "#0000FF");
			}
	});

	// TODO: font family change
	$('input[name="family"]').click(function(event){
		var fontCHANGE = $("input:radio[name=family]:checked").val();
			if(fontCHANGE=="courier,monospace"){
				$("#text").css("font-family", "Courier, Monospace");
			} else if(fontCHANGE=="times new roman,serif"){
				$("#text").css("font-family", "Times New Roman, Serif");
			}
			else if(fontCHANGE=="arial,sans-serif"){
				$("#text").css("font-family", "Arial, Sans-serif");
			}
	});
	
	// TODO: font size change
	$("#sizeWarning").append("The Font Size must be between 8 and 80 pixels.");
	$("#sizeWarning").hide();
	var regexp = /^[0-9]+$/;
	var error = false;
	$("#font").keyup(function(){
		if (error){
			$("#sizeWarning").text("The Font Size must be between 8 and 80 pixels.");
			error = false;
		}
		var size = $("input:text[name=font]").val();
		if(regexp.test(size)){
			if((size>=8)&&(size<=80)){
				size = size + "px";
				$("#text").css("font-size", size);
				$("#sizeWarning").hide();
			} else {
				$("#sizeWarning").show();
			}
		} else {
			$("#sizeWarning").text("Please enter numbers only.");
			$("#sizeWarning").show();
			error = true;
		}
	});
	
	// TODO: font bold change
    $('input[value=bold]').click(function(){
		var makeBold= $("input:checkbox[value=bold]:checked").val();
		if(makeBold=="bold"){
			$("#text").css("font-weight", "bold");
		}else {
			$("#text").css("font-weight", "normal");
		}
    });

	// TODO: font italic change
     $('input[value=italic]').click(function(){
		var makeItalic= $("input:checkbox[value=italic]:checked").val();
		if(makeItalic=="italic"){
			$("#text").css("font-style", "italic");
		}else{
			$("#text").css("font-style", "normal");
		}
    });
	

	// search functionality
	$("#search").bind('keyup', function(){

		// for each of the paragraphs in main text
		$("#text").children().each(function(){
			//retrieve the current HTML
			var currentString = $(this).html();

			//Remove existing highlights
			currentString = replaceAll(currentString, "<span class=\"matched\">","");
			currentString = replaceAll(currentString, "</span>","");

			// add in new highlights
			currentString = replaceAll(currentString, $("#search").val(), "<span class=\"matched\">$&</span>");

			// replace the current HTML with highlighted HTML
			$(this).html(currentString);
		});
	});

	// TODO: replace functionality
	$("#replace").click(function(event){
		var originalword = $("#original").val();
		var newword = $("#newtext").val();
		if((originalword.indexOf("<")>=0)||(newword.indexOf("<")>=0)){
			alert("You cannot enter HTML tags into the Search and Replace function.  Please try again.");
			event.preventDefault();
		} else {
			// for each of the paragraphs in main text
			$("#text").children().each(function(){
				//retrieve the current HTML
				var currentString = $(this).html();

				// add in new word
				currentString = replaceAll(currentString, originalword, newword);

				// replace the current HTML with new word HTML
				$(this).html(currentString);
			});
		}
		
	});
		
	
	
	

	// EXTRA CREDIT: form submission

});

/* Replaces all instances of "replace" with "with_this" in the string "txt"
   using regular expressions -- SEE BELOW */
function replaceAll(txt, replace, with_this) {
	return txt.replace(new RegExp(replace, 'g'),with_this);
}
