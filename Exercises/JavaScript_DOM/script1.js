function createDivs() {
	var element1 = document.createElement("div");
	document.getElementById("mainDiv").appendChild(element1);
	var element2 = document.createElement("div");
	document.getElementById("mainDiv").appendChild(element2);
	var element3 = document.createElement("div");
	document.getElementById("mainDiv").appendChild(element3);
	var element4 = document.createElement("div");
	document.getElementById("mainDiv").appendChild(element4);
	var element5 = document.createElement("div");
	document.getElementById("mainDiv").appendChild(element5);
	
	var lastChildMain = document.getElementById("mainDiv").firstChild.nextSibling;
	
	while (lastChildMain != null) {
		var widHeight = parseInt(((Math.random() * 80) + 20));
		
		lastChildMain.style.width = widHeight + "px";
		
		var xy = getRandomPosition(lastChildMain);
		lastChildMain.style.position = "absolute";
		lastChildMain.style.top = xy[0] + 'px';
		lastChildMain.style.left = xy[1] + 'px';
		
		var spanElem = document.createElement("span");
		lastChildMain.appendChild(spanElem);
		lastChildMain.firstChild.innerHTML = "div";
		lastChildMain.style.color = getRandomColor();
		
		var randomRad = parseInt(Math.random()*100);
		lastChildMain.style.borderRadius = randomRad + "%";
		lastChildMain.style.borderColor = getRandomColor();
		
		var brdWidth = parseInt(((Math.random() * 20) + 1));
		
		lastChildMain.style.borderWidth = brdWidth + "px";
		
		lastChildMain = lastChildMain.nextSibling;
	}
}

function getRandomColor () {
	var hex = Math.floor(Math.random() * 0xFFFFFF);
	return "#" + ("000000" + hex.toString(16)).substr(-6);
}

function getRandomPosition(element) {
    var x = document.body.offsetHeight-element.clientHeight;
    var y = document.body.offsetWidth-element.clientWidth;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}
