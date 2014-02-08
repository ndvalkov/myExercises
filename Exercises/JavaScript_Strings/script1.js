function getInput1() {
    
	var inpt = document.getElementById("input").value;
	
	var str = inpt.toString();
	var resultStr = "";
	
	for (var i = str.length - 1; i >= 0; i--) {
	    
		resultStr += str[i];
	}
	
	document.getElementById("resultArea").value = resultStr;
	
}