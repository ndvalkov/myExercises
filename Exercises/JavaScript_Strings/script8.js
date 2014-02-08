var strHTML = "";

function getInput1() {
    
	strHTML = document.getElementById("main").innerHTML;
	
	document.getElementById("resultArea").value = strHTML;
	// document.getElementById("resultArea").value = urlElement.toSource();

	
}

function getInput2() {

    document.getElementById("resultArea").value = replaceATagsWithURL(strHTML);
}


function replaceATagsWithURL(txt) {
    
	var txtArray = txt.split("<a href");
	var indexAhref = 0;
	
	for (var i = 1; i < txtArray.length; i++) {
	    
		var temp = txtArray[i].split("</a>");
		var ff = temp[0].replace(">", "]");
		temp[0] = ff;
		txtArray[i] = temp.join("[/URL]")
		
	}
	
	var resultTxt = txtArray.join("[URL");
	return resultTxt;
	
}