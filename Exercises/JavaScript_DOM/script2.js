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
	
	var firstDiv = document.getElementById("mainDiv").firstChild.nextSibling;
	var counter = 1;
	
	while (firstDiv) {
		firstDiv.id = "Object-" + counter;
		
		switch (firstDiv.id) {
			case "Object-1": firstDiv.style.position = "absolute";
				firstDiv.style.top = "100px";
				firstDiv.style.left = "300px";break;
			case "Object-2": firstDiv.style.position = "absolute";
				firstDiv.style.top = "200px";
				firstDiv.style.left = "400px";break;
			case "Object-3": firstDiv.style.position = "absolute";
				firstDiv.style.top = "300px";
				firstDiv.style.left = "350px";break;
			case "Object-4": firstDiv.style.position = "absolute";
				firstDiv.style.top = "300px";
				firstDiv.style.left = "250px";break;
			case "Object-5": firstDiv.style.position = "absolute";
				firstDiv.style.top = "200px";
				firstDiv.style.left = "200px";break;
		}
		
		firstDiv = firstDiv.nextSibling;
		counter++;
	}
	
	var countRotate = 1;
	
	window.setInterval(moveElements, 1000);
	
	
	function moveElements() {
		
		switch (countRotate) {
			case 1: var currObject = document.getElementById("Object-1");
				nextStyle = "position: absolute; top: 170px; left: 370px;"; 
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-2");
				nextStyle = "position: absolute; top: 270px; left: 370px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-3");
				nextStyle = "position: absolute; top: 300px; left: 320px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-4");
				nextStyle = "position: absolute; top: 270px; left: 220px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-5");
				nextStyle = "position: absolute; top: 180px; left: 220px;";
				currObject.setAttribute("style", nextStyle);break;
			case 2: 
				var currObject = document.getElementById("Object-1");
				nextStyle = "position: absolute; top: 230px; left: 400px;"; 
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-2");
				nextStyle = "position: absolute; top: 300px; left: 320px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-3");
				nextStyle = "position: absolute; top: 300px; left: 290px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-4");
				nextStyle = "position: absolute; top: 250px; left: 220px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-5");
				nextStyle = "position: absolute; top: 150px; left: 260px;";
				currObject.setAttribute("style", nextStyle);break;
			case 3: var currObject = document.getElementById("Object-1");
				nextStyle = "position: absolute; top: 300px; left: 330px;"; 
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-2");
				nextStyle = "position: absolute; top: 300px; left: 290px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-3");
				nextStyle = "position: absolute; top: 230px; left: 220px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-4");
				nextStyle = "position: absolute; top: 270px; left: 220px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-5");
				nextStyle = "position: absolute; top: 160px; left: 270px;";
				currObject.setAttribute("style", nextStyle);break;
			case 4: var currObject = document.getElementById("Object-1");
				nextStyle = "position: absolute; top: 285px; left: 220px;"; 
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-2");
				nextStyle = "position: absolute; top: 210px; left: 220px;"
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-3");
				nextStyle = "position: absolute; top: 160px; left: 300px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-4");
				nextStyle = "position: absolute; top: 220px; left: 345px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-5");
				nextStyle = "position: absolute; top: 320px; left: 330px;";
				currObject.setAttribute("style", nextStyle);break;
			case 5: var currObject = document.getElementById("Object-1");
				nextStyle = "position: absolute; top: 210px; left: 200px;"; 
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-2");
				nextStyle = "position: absolute; top: 160px; left: 280px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-3");
				nextStyle = "position: absolute; top: 220px; left: 360px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-4");
				nextStyle = "position: absolute; top: 250px; left: 360px;";
				currObject.setAttribute("style", nextStyle);
				currObject = document.getElementById("Object-5");
				nextStyle = "position: absolute; top: 320px; left: 250px;";
				currObject.setAttribute("style", nextStyle);break;
		}
		
		if (countRotate == 5) {
			countRotate = 1;
		} else {
			countRotate++;
		}
		
	}
}
