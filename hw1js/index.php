<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>INFO 2300 - HW1</title> 
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="script.js"></script>
<link rel="stylesheet" type="text/css" href="stylesheet.css" title="StyleSheet"/> 
</head>
<body>
<div id="wrapper">
<h1>Super Cool Javascript Text Editor</h1>
<form id="controlForm" class="controls" action="index.php" method="post">
	<div id="color">
		<h2 class="test2">Font Color</h2>
		Red <input type="radio" name="color" value="Red" /><br />
		Blue <input type="radio" name="color" value="Blue" /><br />
	</div>
		
	<div>
		<h2>Font Family</h2>
		<!-- Giving specific names, then generic ones, is useful for font families
			because not everyone has every font. -->
		Courier <input type="radio" name="family" value="courier,monospace"/><br />
		Times New Roman <input type="radio" name="family" value="times new roman,serif" /><br />
		Arial <input type="radio" name="family" value="arial,sans-serif" /><br />
	</div>
	
	<div id="font">
		<h2>Font Size</h2>
		<input type="text" name="font" value="15" /> px
		<br /><span id="sizeWarning"></span>
	</div>
	
	<div>
		<h2>Text Decoration</h2>
		Bold <input type="checkbox" name="decoration[]" value="bold" /><br />
		<!-- Added for italic -->
		Italic <input type="checkbox" name="decoration[]" value="italic" /><br />
	</div>
	
	<div>
		<h2>Search Features [Already Implemented]</h2>
		<input id="search" type="text" name="search"/>
	</div>
	
	<div>
		<h2>Replace</h2>
		<table>
		<tr><td>Original: </td><td><input id="original" type="text" /></td></tr>
		<tr><td>New Text: </td><td><input id="newtext" type="text" /></td></tr>
		<tr><td colspan="2"><input id="replace" type="button" name="save" value="Replace" /></td></tr>
		</table>
	</div>

</form>


<form id="myform" class="test" action="saveFile.php" method="post">
<div id="saveResult" class="saveResult">
	<input name="hiddentext" type="hidden" />
	<input name="savebutton" type="submit" value="Save file" />
</div>
</form>

<div id="text">

<?php
	//reads in the file
	$file = file("lorem.txt");
	foreach($file as $line){
		echo "<p>".$line."</p>";
	}
?>

</div>
</body>
</html>
