function getInput() {
	
	var data1  = document.getElementById('text1').value;
	
	var outputStr = "Numbers: "
	
	for (var i = 1; i <= data1; i++) {
	    
		outputStr+= i + " ";
		
	}
	
	document.getElementById("resultArea").value = outputStr;
	
}