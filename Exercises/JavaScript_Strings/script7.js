var dd = "";

var urlElement = {
	protocol: " ",
	server: " ",
	resource: " "
}

function getInput1() {
    
	var inpt = document.getElementById("input").value;
	
	var urlArray = inpt.split("://");
	
	urlElement.protocol = urlArray[0];
	
	var str = urlArray[1];
	
	var urlArrayNew = str.split("/");

	urlElement.server = urlArrayNew[0];
	
	urlArrayNew.shift();
	
	var ff = urlArrayNew.join("/");
	
	urlElement.resource = "/" + ff;
	
	document.getElementById("resultArea").value = urlElement.toSource();

	
}
