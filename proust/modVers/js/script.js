$(document).ready(function(){

	//Display versioned TEI files in a container with ID #tei-1.
	//This example assumes that the container takes up the entire screen.

	$('#tei').data('teiDisplay', {
		xmlFile: 'data/Penmarch.xml',
		annotations: 'data/annotations.json',
		highlights: 'data/annotations.json',
		fixFirst: false,
		//height: 300,
		//locs: 'a3,a4,a5',
		//witnesses: 'v4n8,v4n11',
		//dev: true
	});

	$('#tei').teiDisplay();	


	//Display versioned TEI files in a container with ID #tei-single.
	//This example assumes that the container exists in a column of text.

	$('#tei-single').data('teiDisplay', {
		xmlFile: 'data/marie.xml',
		fixFirst: true,
		fullscreen: false,
		//height: 300,
		annotations: 'data/annotations_marie.json',
		highlights: 'data/annotations_marie.json',		
		//witnesses: 'v4n8,v4n11',
	});

	$('#tei-single').teiDisplay();		

})//onReady

