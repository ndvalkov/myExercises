function testElipse() {
		
	movingShapes.add("elipse");
		
}

function testRectangular() {

	movingShapes.add("rect");
}




var movingShapes = (function () {
	
	
	function add(pathMovement) {
		
		var divElem = document.createElement("div");
		document.getElementById("wrapper").appendChild(divElem);
		divElem.style.border = "1px solid red";
		divElem.style.backgroundColor = "green";
		divElem.style.width = "50px";
		divElem.style.height = "50px";
		divElem.style.position = "absolute";
	
	
		if (pathMovement == "elipse") {
			
			function positionOne() {
				divElem.style.top = "250px";
				divElem.style.left = "250px";
			};
			
			function positionTwo() {
				divElem.style.top = "200px"; 
				divElem.style.left = "200px";
			};
			
			function positionThree() {
				divElem.style.top = "150px";
				divElem.style.left = "250px";
			};
			
			function positionFour() {
				divElem.style.top = "150px";
				divElem.style.left = "300px";
			};
			
			function positionFive() {
				divElem.style.top = "200px";
				divElem.style.left = "350px";
			};
			
			function positionSix() {
				divElem.style.top = "250px";
				divElem.style.left = "300px";
			};
			
			
			var counterElipse = 1;
			
			function rotate() {
				
				switch (counterElipse) {
					case 1: positionOne(); break;
					case 2: positionTwo(); break;
					case 3: positionThree(); break;
					case 4: positionFour(); break;
					case 5: positionFive(); break;
					case 6: positionSix(); counterElipse=0; break;
				}
				counterElipse++;
			}
			
			setInterval(rotate, 1000);
			
			
			
		}
		
		if (pathMovement == "rect") {
				
				function position11() {
					divElem.style.top = "250px";
					divElem.style.left = "250px";
				}
				
				function position12() {
					divElem.style.top = "250px";
					divElem.style.left = "100px";
				}
				
				function position13() {
					divElem.style.top = "150px";
					divElem.style.left = "100px";
				}
				
				function position14() {
					divElem.style.top = "150px";
					divElem.style.left = "250px";
				}
				
				var counterRec = 1;
				
				function rotateRec() {
					
					switch (counterRec) {
						case 1: position11(); break;
						case 2: position12(); break;
						case 3: position13(); break;
						case 4: position14(); counterRec=0; break;
					}
					counterRec++;
				}
				
				setInterval(rotateRec, 1000);
			
		}
		
	
	}
	
	return {
		add: add
	};
	
}());
