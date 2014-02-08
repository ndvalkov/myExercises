function getInput1() {
    
	// var inpt = document.getElementById("input").value;
	
	// var str = inpt.toString();
	
	var txt = document.getElementById("resultArea").value;
	
		document.getElementById("resultArea").value = splitWithNbsp(txt);
}


function splitWithNbsp(txt) {
    
	var strArr = txt.split(" ");
	var newTxt = strArr.join("&nbsp;")
	return newTxt;
}







