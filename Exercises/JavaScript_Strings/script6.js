var dd = "";

function getInput1() {
    
	// var inpt = document.getElementById("input").value;
	
	// var str = inpt.toString();
	
	dd = document.getElementById("main").innerHTML;
	
	document.getElementById("resultArea").value = dd;
	
	
	
	
		// document.getElementById("resultArea").value = splitWithNbsp(txt);
}

function getInput2() {
	document.getElementById("resultArea").value = extractText(dd);
}


function extractText(txtHTML) {
    
	var noHTML = /(<([^>]+)>)/ig; 
	
	
	var clean = txtHTML.replace(noHTML, ' '); 
	return clean;
}






