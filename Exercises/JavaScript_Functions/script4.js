function getInput() {
    
	document.getElementById("resultArea").value = countDivs();
	
	
	
}

function countDivs() {
    
	var tagCollection = document.getElementsByTagName("div");
	return tagCollection.length;
}