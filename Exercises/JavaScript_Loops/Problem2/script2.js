function getInput() {
	
	var data1  = document.getElementById('text1').value;
	
	var outputStr = "Number: "
	
	for (var i = 1; i <= data1; i++) {
	    
		if ((i%3==0) && (i%7==0)) {
		    continue;
		}
		outputStr+= i + " ";
	}
	
	document.getElementById("resultArea").value = outputStr;
	
}