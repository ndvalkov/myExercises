function getInput1() {
    
	// var inpt = document.getElementById("input").value;
	
	// var str = inpt.toString();
	
	var txt = document.getElementById("resultArea").value;
	
	
	changeCaseText(txt);
	
		// document.getElementById("resultArea").value = "The result is: " + (counter1 + counter2);
}



function changeCaseText(txt) {
    
	
	var upCaseOpenTag = "<upcase>"
	var upCaseCloseTag = "</upcase>"
	var index1 = 0;
	var index2 = 0;
	var ff = txt;
	
	while (ff.indexOf("<upcase>") != -1 && ff.indexOf("</upcase>") != -1) {
	    
		index1 = ff.indexOf("<upcase>");
		index2 = ff.indexOf("</upcase>");
		var subStr = ff.substring(index1 + 8, index2);
		var newSubstr = subStr.toUpperCase();
		ff = ff.replace(subStr, newSubstr);
		
		
		
		
	}
	
	
	
	
}






