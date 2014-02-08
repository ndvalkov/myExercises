function createDivs() {
	var ff = ""
	var divArea = document.createElement("textarea");
	document.getElementById("mainDiv").appendChild(divArea);
	var div1 = document.createElement("input");
	document.getElementById("mainDiv").appendChild(div1);
	document.getElementById("mainDiv").lastChild.setAttribute("type", "color");
	var div2 = document.createElement("input");
	document.getElementById("mainDiv").appendChild(div2);
	document.getElementById("mainDiv").lastChild.setAttribute("type", "color");
	
}

function colorTextArea() {
	
	document.getElementsByTagName("textarea")[0].innerHTML = "font color"
	var input1Value = document.getElementById("mainDiv").lastChild.previousSibling.value;
	var input2Value = document.getElementById("mainDiv").lastChild.value;
	document.getElementsByTagName("textarea")[0].style.color = input1Value;
	document.getElementsByTagName("textarea")[0].style.backgroundColor = input2Value;
}
