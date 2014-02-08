var obj = {
	body: "Pesho", 
	applets: "Pesho", 
	doctype: "Pesho", 
	implementation: "Pesho", 
	images: "Pesho", 
	readyState: "Pesho", 
	title: "Pesho", 
	write: "Pesho", 
	domain: "Pesho" 	
}

function getInput1() {
    var inpt = document.getElementById("input").value;
	document.getElementById("resultArea").value = checkForProperty(obj, inpt);
}


function checkForProperty(object, property) {
    
	var validity = false;
	// var len = object.length;
	for (i in object) {
		if ((i == property)) {
	        validity = true;
			break;
	    } 
	}
	
	if (validity) {
	    return "The object cantains this property"
	} else{
		return "The object does not cantain this property"
	}
	
}

