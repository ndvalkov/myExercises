function createDivs() {
	var div1 = document.createElement("div");
	document.getElementById("mainDiv").appendChild(div1);
	var div2 = document.createElement("div");
	document.getElementById("mainDiv").appendChild(div2);
	var div3 = document.createElement("div");
	document.getElementById("mainDiv").appendChild(div3);
	var div4 = document.createElement("div");
	document.getElementById("mainDiv").appendChild(div4);
	var div5 = document.createElement("div");
	document.getElementById("mainDiv").appendChild(div5);
}

function colorDivs() {
	
	var mainDiv = document.getElementById("mainDiv");
	
	if (document.querySelector) {
		var divCol = mainDiv.querySelectorAll("div");
	} else {
		var divCol = mainDiv.getElementsByTagName("div");
	}
	
	for (var i = 0, len = divCol.length; i < len; i++) {
		divCol[i].style.borderColor = "red";
	}
	
}
